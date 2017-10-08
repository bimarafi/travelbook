/**
 * Data pencarian penerbangan
 * @property {string} from Bandara keberangkatan
 * @property {string} to Bandara tujuan
 * @property {string} go_date Tanggal berangkat
 * @property {string} ret_date Tanggal pulang bila pp/rountrip, kosongkan bila sekali jalan
 * @property {number} adult Jumlah penumpang dewasa
 * @property {number} child Jumlah penumpang anak
 * @property {number} infant Jumlah penumpang bayi
 */
export interface ISearchFlightQuery {
  token: string;
  flight_form: {
    from: string;
    to: string;
    go_date: string;
    ret_date: string;
    adult: number;
    child: number;
    infant: number;
    sort: any;
  }
}
