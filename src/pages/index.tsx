import React, { useEffect } from "react";
import {Card} from "../components/Swap";
import { TabWrapper, TabList } from "../components/Tabs";
import TabItem from "../TabItem";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Swaping from "../components/Swap/Swaping";
import CreatePair from "../components/CreatePair";




const App = () => {
  // Tab onClick data Handlers

  const tabDispatch = useDispatch();

  // seletor for tab information

  const selector = useSelector(({ tabstate }) => {
    return tabstate;
  });

  const DyanmicComponent = () => {
      if(selector.activeTab === "Swap"){
        return <Swaping />
      }
      else if(selector.activeTab === "Create Pair"){
        return <CreatePair />
      }
  }
  return (
    <Card>
      <TabWrapper>
        { TabItem.map(({ name, Icon }, index) => {
          const isActive = selector.activeTabIndex === index;
          return (
            <TabList
              key={index}
              onClick={() => {
                return tabDispatch({
                  type: "CHANGE_TAB",
                  payload:{
                   activeTab: name,
                   activeTabIndex: index,
                  }
                });
              }}
              active={isActive}
            >
              <Icon style={{ marginRight: "10px" }} />
              {name}
            </TabList>
          );
        })}
      </TabWrapper>

        {
        /**
         * here you have to fetch the component accordingly navigation
         */
         }
        <DyanmicComponent />
    </Card>
  );
};

//
export default App;
