// Generated by https://quicktype.io

export interface User {
  results: Results;
}

export interface Results {
  id:         string;
  first_name: string;
  last_name:  string;
  email:      string;
  username:   string;
  image_url:  string;
  profiles:   Profile[];
}

export interface Profile {
  id:         string;
  user_id:    string;
  role_id:    number;
  created_at: string;
  updated_at: string;
}


export interface LoginUser {
  email:string;
  password: string;
}