type Price = {
    amountInMicros: number
    currencyCode: string
}
type Offer = {
    finskyOfferType: number
    listPrice: Price
    retailPrice: Price
}
type AccessInfo = {
    accessViewStatus: string
    country: string,
    embeddable: boolean
    epub: {
        isAvailable: boolean
    }
    pdf: {
        isAvailable: boolean
    }
    publicDomain: boolean
    quoteSharingAllowed: boolean
    textToSpeechPermission: string
    viewability: string
    webReaderLink: string
}
type SaleInfo = {
    buyLink: string
    country: string
    isEbook: boolean
    listPrice: {
        listPrice: number
        currencyCode: string
    }
    offers: Offer[]
    retailPrice: {
        amount: number
        currencyCode: string
    }
    saleability: string
}
type VolumeInfo = {
    allowAnonLogging: boolean
    authors: string[]
    canonicalVolumeLink: string
    categories: string[]
    contentVersion: string
    description: string
    imageLinks: {
        extraLarge?: string
        large?: string
        medium?: string
        small?: string
        smallThumbnail: string
        thumbnail: string
    }
    industryIdentifiers: {
        identifier: string
        type: string
    }[]
    infoLink: string
    language: string
    maturityRating: string
    pageCount: number
    panelizationSummary: {
        containsEpubBubbles: boolean
        containsImageBubbles: boolean
    }
    previewLink: string
    printType: string
    publishedDate: string
    publisher: string
    readingModes: {
        image: boolean
        text: boolean
    }
    title: string
}
export type Book = {
    accessInfo: Partial<AccessInfo>
    etag: string
    id: string
    kind: string
    saleInfo: Partial<SaleInfo>
    searchInfo: {
        textSnippet: string
    }
    selfLink: string
    volumeInfo: Partial<VolumeInfo>
}