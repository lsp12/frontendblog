export interface IPost{
  _id?: string;
  title: string;
  body: string;
  userid:IUsers;
  conmment?: [];
  createdAt: Date;
  updatedAt?: string;
}

export interface IUsers{
  _id?: string;
  urlImage?: string;
  email: string;
  nameUser?: string;
  position?: string;
  createdAt: string;
}

export interface IComent{
  _id?: string;
  comment: string;
}

export interface ICreatePost extends IComent {
  postBlogId: string;
}

export interface IGetComent extends IComent {
  postBlogId: string;
  userId: IUsers;
  createdAt: Date;
}
export interface IUpdatePost {
  _id?: string;
  title: string;
  body: string;
}
