namespace viewer.pwm {

    export interface IPspm {
        pspm: number[][];
        motif_length: number;
        alph_length: number;
        nsites: number;
        evalue: number;
    }
}