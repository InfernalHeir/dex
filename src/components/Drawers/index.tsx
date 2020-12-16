import React , {useRef } from "react";
import { useDisclosure } from "@chakra-ui/react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
  } from "@chakra-ui/react";

  interface DrawersProps {
      drawerHeading: string,
      children: React.ReactNode,
      isOpen: boolean,
      onClose: () => void,
  }

  const Drawers = (props: DrawersProps) =>  {
    
    return (
      <>
        <Drawer
          isOpen={props.isOpen}
          placement="right"
          onClose={props.onClose}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>{props.drawerHeading}</DrawerHeader>
  
              <DrawerBody>
               {props.children}
              </DrawerBody>
  
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={props.onClose}>
                  Cancel
                </Button>
                <Button color="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }

  export default Drawers;