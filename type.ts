export interface IHeaders {
    name: string
}

export interface IClients {
    image_path: string
}

export interface IProducts {
    id: number,
    name: string,
    title: string
    description: string,
    image_path: any
}

export interface IFaq {
    title: string,
    subheading: string,
    description: string,
    buttons: button[]
}

export type screen = 'pill screen' | 'rabbit hole' | 'wonderland';
export type button = 'Meet Our Team' | 'What the Tech' | 'Play Book' | 'Nullcast' | 'Open Source';
export type Product = 'Enterprise Architecture' | 'System Programming' | 'Web & Mobile' | 'Machine Learning' | '3D Rendering' | 'Data Analytics';