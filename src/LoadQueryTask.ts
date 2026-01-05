namespace viewer {

    type Pspm = viewer.pwm.Pspm;

    /**
     * Draw motif logo from this function
    */
    export class LoadQueryTask {

        /**
         * the motif PWM matrix model
        */
        public readonly motif: Pspm;

        public constructor(
            public target_id: string,
            pwm: Pspm | string,
            public scaleLogo: number,
            public render: MotifLogo) {

            this.motif = typeof pwm == "string" ? new viewer.pwm.Pspm(pwm, null) : pwm;
        }

        public run() {
            let alpha = new Alphabet("ACGT");
            let query_pspm = new viewer.pwm.Pspm(this.motif, null);
            let logo = this.logo_1(alpha, "MEME Suite", query_pspm);

            this.replace_logo(logo, this.target_id, this.scaleLogo);
        }

        public logo_1(alphabet: Alphabet, fine_text: string, pspm: Pspm): Logo {
            "use strict";
            return new Logo(alphabet, fine_text).addPspm(pspm);
        }

        /**
         * Specifes that the element with the specified id
         * should be replaced with a generated logo.
        */
        public replace_logo(logo: Logo,
            replace_id: string,
            scale: number,
            title_txt: string = "Preview Logo",
            display_style: string = "block") {

            "use strict";

            var element: HTMLElement = $ts("#" + replace_id);

            if (!replace_id) {
                alert(`Can't find specified id (${replace_id})`);
                return;
            }

            // found the element!
            var canvas = CanvasHelper.createCanvas([500, 1200], replace_id, title_txt, display_style);

            if (canvas === null) {
                return;
            }

            // draw the logo on the canvas
            this.render.draw_logo_on_canvas.doRender(logo, canvas, null, scale);

            // replace the element with the canvas
            element.parentNode.replaceChild(canvas, element);
        }
    }
}

