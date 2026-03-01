import { resend } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, sector, challenges, goals, budget } = body;

        const { data, error } = await resend.emails.send({
            from: 'Audit Exceed Digital <onboarding@resend.dev>',
            to: ['contact@exceeddigital.fr'],
            subject: `Nouvel Audit Stratégique : ${company}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h1 style="color: #0070f3;">Nouvelle Demande d'Audit</h1>
                    <p>Un nouvel audit a été complété sur le site.</p>
                    <hr />
                    <p><strong>Nom :</strong> ${name}</p>
                    <p><strong>Email :</strong> ${email}</p>
                    <p><strong>Entreprise :</strong> ${company}</p>
                    <p><strong>Secteur :</strong> ${sector}</p>
                    <h3>Détails Stratégiques</h3>
                    <p><strong>Défis :</strong> ${challenges?.join(', ') || 'N/A'}</p>
                    <p><strong>Objectifs :</strong> ${goals?.join(', ') || 'N/A'}</p>
                    <p><strong>Budget :</strong> ${budget || 'N/A'}</p>
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
