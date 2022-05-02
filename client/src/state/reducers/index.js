import { combineReducers } from "redux";
import posts from "./posts";
import comments from "./comments";
import subcomments from './subcomments';

export const reducers = combineReducers({ posts, comments, subcomments })