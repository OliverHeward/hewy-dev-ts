// This file holds ambient type declarations.

declare module '*.svg' {
    import { ReactElement, SVGProps } from "react";
    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
}