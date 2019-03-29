/** TodoMVC model definitions **/

export interface MarkerModel {
    lat: number,
    lng: number
  }
  
  export namespace MarkerModel {
    export enum Filter {
        GET_CURRENT_LOCATION = 'sdj',
    }
  }
  