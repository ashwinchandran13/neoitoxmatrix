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

export type Product = 'Enterprise Architecture' | 'System Programming' | 'Web & Mobile' | 'Machine Learning' | '3D Rendering' | 'Data Analytics';