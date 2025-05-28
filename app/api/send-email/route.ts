import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, data } = body

    let subject = ""
    let htmlContent = ""

    switch (type) {
      case "contact":
        subject = `Nieuwe contactaanvraag van ${data.name}`
        htmlContent = generateContactEmail(data)
        break
      case "appointment":
        subject = `Nieuwe afspraakverzoek van ${data.name}`
        htmlContent = generateAppointmentEmail(data)
        break
      case "quote":
        subject = `Nieuwe offerteaanvraag van ${data.name} - ${data.company}`
        htmlContent = generateQuoteEmail(data)
        break
      default:
        return NextResponse.json({ error: "Invalid email type" }, { status: 400 })
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "DMR Finance <info@dmradministratie.nl>",
    // from: "onboarding@resend.dev",
      to: ["Info@dmradministratie.nl"],
      subject,
      html: htmlContent,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data: emailData })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function generateContactEmail(data: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nieuwe Contactaanvraag</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1e40af; margin-bottom: 5px; display: block; }
        .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #3b82f6; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🏢 DMR Finance</h1>
        <h2>Nieuwe Contactaanvraag</h2>
      </div>
      
      <div class="content">
        <div class="field">
          <span class="label">👤 Naam:</span>
          <div class="value">${data.name || "Niet opgegeven"}</div>
        </div>
        
        ${
          data.company
            ? `
        <div class="field">
          <span class="label">🏢 Bedrijfsnaam:</span>
          <div class="value">${data.company}</div>
        </div>
        `
            : ""
        }
        
        <div class="field">
          <span class="label">📧 Email:</span>
          <div class="value"><a href="mailto:${data.email}">${data.email || "Niet opgegeven"}</a></div>
        </div>
        
        ${
          data.phone
            ? `
        <div class="field">
          <span class="label">📞 Telefoonnummer:</span>
          <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
        </div>
        `
            : ""
        }
        
        <div class="field">
          <span class="label">💬 Bericht:</span>
          <div class="value">${data.message || "Geen bericht opgegeven"}</div>
        </div>
      </div>
      
      <div class="footer">
        <p>Deze email is automatisch gegenereerd via de DMR Finance website.</p>
        <p><strong>DMR Finance</strong> | Administratie & Advies</p>
      </div>
    </body>
    </html>
  `
}

function generateAppointmentEmail(data: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nieuwe Afspraakverzoek</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1e40af; margin-bottom: 5px; display: block; }
        .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #3b82f6; }
        .services { display: flex; flex-wrap: wrap; gap: 8px; }
        .service-tag { background: #3b82f6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; }
        .priority { background: #fef3c7; border-left-color: #f59e0b; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>📅 DMR Finance</h1>
        <h2>Nieuwe Afspraakverzoek</h2>
      </div>
      
      <div class="content">
        <div class="field">
          <span class="label">👤 Naam:</span>
          <div class="value">${data.name}</div>
        </div>
        
        ${
          data.company
            ? `
        <div class="field">
          <span class="label">🏢 Bedrijfsnaam:</span>
          <div class="value">${data.company}</div>
        </div>
        `
            : ""
        }
        
        <div class="field">
          <span class="label">📧 Email:</span>
          <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>
        
        ${
          data.phone
            ? `
        <div class="field">
          <span class="label">📞 Telefoonnummer:</span>
          <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
        </div>
        `
            : ""
        }
        
        ${
          data.preferredDate
            ? `
        <div class="field">
          <span class="label">📅 Voorkeursdatum:</span>
          <div class="value priority">${new Date(data.preferredDate).toLocaleDateString("nl-NL", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
        </div>
        `
            : ""
        }
        
        ${
          data.preferredTime
            ? `
        <div class="field">
          <span class="label">🕐 Voorkeurstijd:</span>
          <div class="value priority">${getTimeLabel(data.preferredTime)}</div>
        </div>
        `
            : ""
        }
        ${
          data.businessType
            ? `
        <div class="field">
          <span class="label">🏛️ Rechtsvorm:</span>
          <div class="value">${data.businessType.toUpperCase()}</div>
        </div>
        `
            : ""
        }

        ${
          data.services && data.services.length > 0
            ? `
        <div class="field">
          <span class="label">🛠️ Gewenste diensten:</span>
          <div class="value">
            <div class="services">
              ${data.services.map((service: string) => `<span class="service-tag">${service}</span>`).join("")}
            </div>
          </div>
        </div>
        `
            : ""
        }
        
        ${
          data.message
            ? `
        <div class="field">
          <span class="label">💬 Aanvullende opmerkingen:</span>
          <div class="value">${data.message}</div>
        </div>
        `
            : ""
        }
      </div>

      <div class="footer">
        <p>⚡ <strong>Actie vereist:</strong> Neem contact op met de klant om de afspraak in te plannen.</p>
        <p><strong>DMR Finance</strong> | Administratie & Advies</p>
      </div>
    </body>
    </html>
  `
}

function generateQuoteEmail(data: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nieuwe Offerteaanvraag</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1e40af; margin-bottom: 5px; display: block; }
        .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #3b82f6; }
        .services { display: flex; flex-wrap: wrap; gap: 8px; }
        .service-tag { background: #3b82f6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px; }
        .business-info { background: #ecfdf5; border-left-color: #10b981; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>💼 DMR Finance</h1>
        <h2>Nieuwe Offerteaanvraag</h2>
      </div>

      <div class="content">
        <h3 style="color: #1e40af; margin-bottom: 20px;">👤 Contactgegevens</h3>

        <div class="field">
          <span class="label">👤 Contactpersoon:</span>
          <div class="value">${data.name}</div>
        </div>

        <div class="field">
          <span class="label">🏢 Bedrijfsnaam:</span>
          <div class="value business-info">${data.company}</div>
        </div>

        <div class="grid">
          <div class="field">
            <span class="label">📧 Email:</span>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>

          ${
            data.phone
              ? `
          <div class="field">
            <span class="label">📞 Telefoon:</span>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          `
              : ""
          }
        </div>

        <h3 style="color: #1e40af; margin: 30px 0 20px 0;">🏛️ Bedrijfsinformatie</h3>

        <div class="grid">
          ${
            data.businessType
              ? `
          <div class="field">
            <span class="label">🏛️ Rechtsvorm:</span>
            <div class="value business-info">${data.businessType.toUpperCase()}</div>
          </div>
          `
              : ""
          }

          ${
            data.employees
              ? `
          <div class="field">
            <span class="label">👥 Aantal medewerkers:</span>
            <div class="value business-info">${data.employees}</div>
          </div>
          `
              : ""
          }
        </div>
        
        <div class="grid">
          ${
            data.monthlyTransactions
              ? `
          <div class="field">
            <span class="label">💳 Banktransacties/maand:</span>
            <div class="value business-info">${data.monthlyTransactions}</div>
          </div>
          `
              : ""
          }
          
          ${
            data.yearlyInvoices
              ? `
          <div class="field">
            <span class="label">📄 Facturen/jaar:</span>
            <div class="value business-info">${data.yearlyInvoices}</div>
          </div>
          `
              : ""
          }
        </div>

        ${
          data.services && data.services.length > 0
            ? `
        <div class="field">
          <span class="label">🛠️ Gewenste diensten:</span>
          <div class="value">
            <div class="services">
              ${data.services.map((service: string) => `<span class="service-tag">${service}</span>`).join("")}
            </div>
          </div>
        </div>
        `
            : ""
        }

        ${
          data.additionalInfo
            ? `
        <div class="field">
          <span class="label">📝 Aanvullende informatie:</span>
          <div class="value">${data.additionalInfo}</div>
        </div>
        `
            : ""
        }
      </div>

      <div class="footer">
        <p>💰 <strong>Actie vereist:</strong> Bereid een offerte voor op basis van de verstrekte informatie.</p>
        <p><strong>DMR Finance</strong> | Administratie & Advies</p>
      </div>
    </body>
    </html>
  `
}

function getTimeLabel(time: string) {
  const timeLabels: { [key: string]: string } = {
    morning: "Ochtend (09:00-12:00)",
    afternoon: "Middag (12:00-17:00)",
    evening: "Avond (17:00-20:00)",
  }
  return timeLabels[time] || time
}
