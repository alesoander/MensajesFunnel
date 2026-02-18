const nodemailer = require('nodemailer');

// Email template function
function getEmailTemplate(data) {
    const notesHtml = data.Notas_Presentacion_Onboarding && data.Notas_Presentacion_Onboarding !== 'null' 
        ? `<li style="margin-left: 15px;">${data.Notas_Presentacion_Onboarding}</li>` 
        : '';
    
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
    <div id=":k8" class="Am aiL Al editable LW-avf tS-tW tS-tY" hidefocus="true" aria-label="Cuerpo del mensaje" writingsuggestions="false" g_editable="true" role="textbox" aria-multiline="true" contenteditable="true" tabindex="1" style="direction: ltr; min-height: 276px;" spellcheck="false" jsaction="utQure:.CLIENT;tkRwsc:.CLIENT;input:.CLIENT;uLRpAf:.CLIENT;yGfh2c:.CLIENT" aria-owns=":20i" aria-controls=":20i" data-loom-id="loom-button:0" aria-expanded="false">
        <div>
            <div>
                <div dir="ltr" align="left" style="margin-left: 0pt;">
                    <p>
                        Hola ${data.firstname_responsable_onboarding},<br />
                        <br />
                        Soy Nahuel del equipo de Onboarding &amp; Customer Success, y voy a ser yo quien te acompañe en el proceso de puesta en marcha.
                    </p>
                    <p>
                        Hecha la introducción, quiero contarte que ya revisamos la información de tu hotel y pre-cargamos lo necesario para que puedas avanzar con la configuración de su Asistente. ¿Cómo seguimos?<br />
                        <br />
                    </p>
                    <p style="display: inline;">
                        <strong>
                            1) Tienes que completar y verificar la información que pre-cargamos<br />
                            <br />
                        </strong>
                    </p>
                    <ul>
                        <li style="margin-left: 15px;">
                            Primero tienes que ingresar&nbsp;a nuestra plataforma 👉&nbsp;
                            <strong><a href="${data.wespeak_link_de_acceso}">Click aquí para acceder</a></strong>
                            <br /><br />
                            Este enlace también sirve para registrar a más de una persona y se puede compartir con todo el equipo que usará WeSpeak a diario.
                            <br /><br />
                        </li>
                        <li style="margin-left: 15px;">
                            Una vez dentro, <strong>revisá y completá la información de tu Asistente</strong>, que ya pre-cargamos.
                            Es fundamental <strong>trabajar en la configuración primero</strong>, antes de agendar la reunión,
                            porque así podremos aprovechar al máximo ese espacio y evitar retrabajos.<br /><br />
                        </li>
                        ${notesHtml}
                        <li style="margin-left: 15px;">
                            Al ingresar, vas a encontrar <strong>varios videos explicativos</strong> con los conceptos esenciales
                            y los pasos clave de la implementación. Te recomendamos verlos: te ayudarán a ahorrar tiempo y a avanzar
                            de forma más eficiente..<br /><br />
                        </li>
                        👩‍💻&nbsp; <a href="https://www.youtube.com/watch?v=ujBFHqByoJA&list=PL2SUK-lbzEGfffAbWk1NbgmWSZybiBN4H&index=2" target="_blank">
                            <strong>Video: Introducción y Tips iniciales: ¿Cómo configurar mi Asistente Virtual? | WeSpeak</strong>
                        </a>
                    </ul>
                    <div>
                        <b>2) A</b><strong>gendar una reunión conmigo</strong>&nbsp;para resolver dudas, validar configuraciones y planificar los pasos para la conexión del asistente:<br />
                        <br />
                    </div>
                    <div>
                        <ul>
                            <li style="margin-left: 15px;">
                                Te comparto mi agenda para que veas mi disponibilidad y puedas reservar un espacio directamente ahi&nbsp;
                                👉&nbsp;
                                <strong><a href="https://www.wespeak.pro/nahuel">[Click aquí para acceder</a></strong>
                                <strong>
                                    <a href="https://www.wespeak.pro/nahuel">]</a><br />
                                    <br />
                                </strong>
                            </li>
                            <li style="margin-left: 15px;">
                                <b>🔔 IMPORTANTE&nbsp;</b>:<i>&nbsp;</i>Tienen que
                                participar de la reunión todas las personas que luego estarán usando&nbsp;WeSpeak a diario y asegurate de haber trabajado previamente en la configuración antes de agendar.<br />
                                <br />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div dir="ltr" align="left" style="margin-left: 0pt;">
                    <p>
                        Cualquier duda, estamos a un
                        <a href="https://wa.me/5493446645873" target="_blank" style="font-weight:bold; text-decoration:none;">
                            WhatsApp (+54 9 3446 645873)
                        </a>
                        de distancia.
                    </p>
                    <p>Saludos,</p>
                    <p><br /></p>
                    <div dir="ltr" align="left" style="margin-left: 0pt;">
                        <table style="border: none; border-collapse: collapse;">
                            <tbody>
                                <tr style="height: 118.498pt;">
                                    <td style="vertical-align: top; padding: 5pt; overflow: hidden;">
                                        <p dir="ltr" style="line-height: 1.8; margin-top: 0pt; margin-bottom: 0pt;">
                                            <span style="font-size: 11pt; font-family: Verdana, sans-serif; color: rgb(67, 67, 67); background-color: transparent; font-weight: 700; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; vertical-align: baseline;">
                                                Nahuel Henriquez
                                            </span>
                                        </p>
                                        <p dir="ltr" style="line-height: 1.8; margin-top: 0pt; margin-bottom: 0pt;">
                                            <span style="font-size: 8pt; font-family: Verdana, sans-serif; color: rgb(67, 67, 67); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; vertical-align: baseline;">
                                                Customer Succsess | WeSpeak
                                            </span>
                                        </p>
                                        <p dir="ltr" style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;">
                                            <span style="font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(67, 67, 67); background-color: transparent; font-style: italic; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; vertical-align: baseline;">
                                                Transformando conversaciones en reservas
                                            </span>
                                        </p>
                                        <br />
                                        <p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;">
                                            <span style="font-size: 8pt; font-family: Verdana, sans-serif; color: rgb(67, 67, 67); background-color: transparent; vertical-align: baseline;">
                                                <a href="https://wa.me/+5493446645873" target="_blank">+54 9 3446 645873</a>&nbsp;(WhatsApp)
                                            </span>
                                        </p>
                                        <p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;">
                                            <span style="font-size: 8pt; font-family: Verdana, sans-serif; color: rgb(67, 67, 67); background-color: transparent; vertical-align: baseline;">
                                                <a href="mailto:nahuel.henriquez@wespeak.pro" target="_blank">nahuel.henriquez@wespeak.pro</a>&nbsp;
                                            </span>
                                        </p>
                                        <p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;">
                                            <a href="http://www.wespeak.pro/" target="_blank"><span style="font-size: 8pt; font-family: Verdana, sans-serif; background-color: transparent; vertical-align: baseline;">www.wespeak.pro</span></a>
                                        </p>
                                        <p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;">
                                            <a href="https://www.wespeak.pro/nahuel" target="_blank">
                                                <span style="font-size: 8pt; font-family: Verdana, sans-serif; background-color: transparent; vertical-align: baseline;">Agendar una reunión</span>
                                            </a>
                                        </p>
                                        <br />
                                        <p dir="ltr" style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;">
                                            <a href="https://www.linkedin.com/in/nahuel-ezequiel-henriquez-/" target="_blank" style="text-decoration-line: none;">
                                                <span style="font-size: 9pt; font-family: Montserrat, sans-serif; background-color: transparent; font-weight: 700; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; text-decoration-line: underline; vertical-align: baseline;">
                                                    <span style="border: none; display: inline-block; overflow: hidden; width: 23px; height: 23px;">
                                                        <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcQpEqmxxfyNTWfhBAcPK1gOuzi_9fM6kg34Wi6Kq1ciKF7tbO5b9CN1vpvBO68Q_K4O2wEuCbqSIELLLruJwpm3bEvxB9-bMjmjqYkcKBHOgbOBjlSgvkna_N83dFLohCerrfYoQ?key=Zy0scUOMQOJvxBv3w6ifvw" width="23" height="23" class="gmail-CToWUd" style="margin-left: 0px; margin-top: 0px;" />
                                                    </span>
                                                </span>
                                            </a>
                                            <span style="font-size: 9pt; font-family: Montserrat, sans-serif; color: rgb(157, 222, 243); background-color: transparent; font-weight: 700; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; vertical-align: baseline;">
                                                &nbsp;
                                            </span>
                                            <a href="https://www.instagram.com/wespeak.pro?igsh=MWh2YWZhOGJlZWJuNg%3D%3D&amp;utm_source=qr" target="_blank" style="text-decoration-line: none;">
                                                <span style="font-size: 9pt; font-family: Montserrat, sans-serif; background-color: transparent; font-weight: 700; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; text-decoration-line: underline; vertical-align: baseline;">
                                                    <span style="border: none; display: inline-block; overflow: hidden; width: 23px; height: 23px;">
                                                        <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfiCo02x060KAuZ-hXpK4oWMdQkOBG0M3VeiDt2CBir8xrA455OeZadVPfsv8eLtbh__i20Tsyv2lCR40XnfLGelk3BXjBjv3m9NdAIUErLk1DZQjNTHlkMDeuEFpwryxZSNoS_Fg?key=Zy0scUOMQOJvxBv3w6ifvw" width="23" height="23" class="gmail-CToWUd" style="margin-left: 0px; margin-top: 0px;" />
                                                    </span>
                                                </span>
                                            </a>
                                            <span style="font-size: 9pt; font-family: Montserrat, sans-serif; color: rgb(157, 222, 243); background-color: transparent; font-weight: 700; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; vertical-align: baseline;">
                                                &nbsp;
                                            </span>
                                            <a href="https://www.youtube.com/@wespeakoficial" target="_blank" style="text-decoration-line: none;">
                                                <span style="font-size: 9pt; font-family: Montserrat, sans-serif; background-color: transparent; font-weight: 700; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; text-decoration-line: underline; vertical-align: baseline;">
                                                    <span style="border: none; display: inline-block; overflow: hidden; width: 23px; height: 23px;">
                                                        <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXchzld6fDEg-uTaOfVH8mWtsGoLYD1Bta9hkAr2ysR8I2pQviAK9se-GTPmsmdQhZeO75_TzV80tlHlZndFd64SYH9kibkaCa3Teszol-dvIXGz5Hbj4iJPpHVqkliNWJZpWsNK3g?key=Zy0scUOMQOJvxBv3w6ifvw" width="23" height="23" class="gmail-CToWUd" style="margin-left: 0px; margin-top: 0px;" />
                                                    </span>
                                                </span>
                                            </a>
                                        </p>
                                    </td>
                                    <td style="vertical-align: top; padding: 5pt; overflow: hidden;">
                                        <p dir="ltr" style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;">
                                            <span style="font-size: 7pt; font-family: Roboto, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; vertical-align: baseline;">
                                                <span style="border: none; display: inline-block; overflow: hidden; width: 147px; height: 147px;">
                                                    <img src="https://drive.google.com/uc?export=view&id=1aKY9-94l4Qwdg_143QAbbQrX1r2-5TvM" width="150" height="150" class="gmail-CToWUd gmail-a6T" tabindex="0" style="cursor: pointer; outline: 0px; margin-right: 0px;" />
                                                </span>
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p dir="ltr" style="line-height: 1.656; margin-right: 171pt; margin-top: 0pt; margin-bottom: 0pt;">
                        <a href="https://www.wespeak.pro/suscribe" target="_blank" style="text-decoration-line: none;">
                            <span style="font-size: 11pt; font-family: Arial, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; text-decoration-line: underline; vertical-align: baseline;">
                                <span style="border: none; display: inline-block; overflow: hidden; width: 385px; height: 103px;">
                                    <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdxEYR2_ePGToDnArmLmcZ4Hg_eHEqZK8VC1S9ASDPs__MgkkGhoujNdwSlLjCLpHVlrYZgzaI3LN_HrsH0JM_F5h717B9Z8w5YbZaKgOpWyHSCoeMeu31l4NiWgj0R7GnfPB9a?key=Zy0scUOMQOJvxBv3w6ifvw" width="385.7638888888889" height="103" class="gmail-CToWUd" style="margin-top: 0px;" />
                                </span>
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
}

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const data = req.body;

        // Validate required fields
        if (!data.wespeak_link_de_acceso || !data.firstname_responsable_onboarding || 
            !data.opportunityname || !data.email) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Configure OAuth2 credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL_USER,
                clientId: process.env.GMAIL_CLIENT_ID,
                clientSecret: process.env.GMAIL_CLIENT_SECRET,
                refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            }
        });

        // Email options
        const mailOptions = {
            from: `"WeSpeak - Onboarding" <${process.env.GMAIL_USER}>`,
            to: data.email,
            subject: `Tu asistente está listo para empezar | WeSpeak <> ${data.opportunityname}`,
            html: getEmailTemplate(data)
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ 
            success: true, 
            message: 'Email sent successfully' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            error: 'Failed to send email',
            details: error.message 
        });
    }
};
