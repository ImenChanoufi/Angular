export class Book {
  idbook: any
  title: any
  description: any
  categories: any
  nbrpage: any
  langueBook:any
  publish_date:any
  image!:any
  rate!:any
  attachment!:attachment
}

export class attachment{
  id:any
  fileName:any
  contentType:any
  size:any
  data:any
}
