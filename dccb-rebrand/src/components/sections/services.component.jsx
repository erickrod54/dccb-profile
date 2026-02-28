
import React from "react";
import { Ruler, Map, Layers, ClipboardCheck, Zap, Icon } from 'lucide-react'
import { cn } from "@/lib/utils";

/** DCCB-rebrand - Portfolio version 1.16 - Features: 
 * 
 *      --> Adding fifth service.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const services = [
    {
        title: "ARQUITECTURAL_DRAFTING",
        desc: 'Planos constructivos detallados, secciones y detalles tecnicos bajo estandares internacionales',
        Icon: <Ruler className="w-5 h-5" />,
        code: 'SEC_01',
        featured:false
    },
    {
        title: "URBAN PLANING",
        des: 'Analisis del sitio, esquemas de zonificacion y planificacion de desarrollo urbano sostenible',
        icon: <Map className="w-5 h-5" />,
        code: 'SEC_02',
        featured: false
    },
    {
        title: 'BIM_SUPPORT',
        desc: 'Modelado de informacion de construccion y coordinacion de disciplinas en 3D',
        icon: <Layers className="w-5 h-5" />,
        code: 'SEC_03',
        featured: false
    },
    {
        title: 'TECHNICAL_CONSULTING',
        desc: 'Soporte especializado para firmas de arquitectura en la gestion de documentacion tecnica',
        icon: <ClipboardCheck className="w-5 h-5" />,
        code: 'SEC_04',
        featured:false
    },
    {
        title: 'AI_POWERED_VISUALIZATION',
        desc: 'Renderizado de ultima generacion. Transformamos planos tecnicos en visualizaciones realistas mediante IA para presentaciones de alto impacto',
        icon: <Zap className="w-5 h-5" />,
        code: 'SEC_05',
        featured:true
    }
]
