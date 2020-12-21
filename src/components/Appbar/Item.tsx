import React from "react";
import styled from "styled-components";
import Link from "next/link";

const List = styled.li`
margin-left:10px;
margin-right:10px;
`;

const Anchor = styled.a`
color: #fff;
font-size: 16px;
cursor: pointer;
font-weight: 800;
&:hover{
    color: white;
    text-decoration:none;
}
`;

interface ItemsProps {
    name: string,
    href: string
}
const Item = (props: ItemsProps) => {
    const {name, href} = props;
    return(
        <List>
            <Link href={href}>
                <Anchor>
                    {name}
                </Anchor>
            </Link>      
        </List>
    )
}

export default Item;