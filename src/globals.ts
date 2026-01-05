/// <reference path="../dev/linq.d.ts" />

namespace viewer {

    /**
     * math log(2) constant value
    */
    export const log2: number = Math.log(2)

    /**
     * Fast string trimming implementation found at
     * http://blog.stevenlevithan.com/archives/faster-trim-javascript
     *
     * Note that regex is good at removing leading space but
     * bad at removing trailing space as it has to first go through
     * the whole string.
    */
    export function trim(str: string): string {
        "use strict";

        let ws: RegExp = /\s/;
        let i: number;

        str = str.replace(/^\s\s*/, '');
        i = str.length;

        while (ws.test(str.charAt(--i)));

        return str.slice(0, i + 1);
    }
}