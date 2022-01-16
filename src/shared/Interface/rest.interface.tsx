export interface IPost{
  _id?: string;
  title: string;
  body: string;
  userid:IUsers;
  conmment?: [];
  createdAt: Date;
  updatedAt: string;
}

export interface IUsers{
  _id?: string;
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
