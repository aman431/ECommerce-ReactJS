import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
	{
		title:'Home',
		path:'/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title:'Reports',
		path:'/',
		icon: <IoIcons.IoIosArrowForward />,
		cName: 'nav-text'
	},
	{
		title:'Products',
		path:'/',
		icon: <FaIcons.FaCartPlus />,
		cName: 'nav-text'
	},
	{
		title:'Team',
		path:'/',
		icon: <IoIcons.IoMdPeople />,
		cName: 'nav-text'
	},
]