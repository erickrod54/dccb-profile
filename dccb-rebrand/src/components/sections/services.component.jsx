import React from "react";
import { Ruler, Map, Layers, ClipboardCheck, Zap, Icon } from 'lucide-react'
import { cn } from "@/lib/utils";

/** DCCB-rebrand - Portfolio version 1.12 - Features: 
 * 
 *      --> Adding first service.
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
    }
]