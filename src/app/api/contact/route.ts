import { resend } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, projectType, message } = body;

        const { data, error } = await resend.emails.send({
            from: 'Contact Exceed Digital <onboarding@resend.dev>',
            to: ['contact@exceeddigital.fr'],
            subject: `Nouveau Message : ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h1 style="color: #0070f3;">Nouveau Message de Contact</h1>
                    <p>Un visiteur a envoyé un message depuis le site web.</p>
                    <hr />
                    <p><strong>Nom :</strong> ${name}</p>
                    <p><strong>Email :</strong> ${email}</p>
                    <p><strong>Entreprise :</strong> ${company || 'N/A'}</p>
                    <p><strong>Type de Projet :</strong> ${projectType || 'N/A'}</p>
                    <p><strong>Message :</strong></p>
                    <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; margin-top: 10px;">
                        ${message}
                    </div>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
