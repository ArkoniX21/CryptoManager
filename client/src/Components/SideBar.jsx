import React from 'react';
import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

const options = [
    {
      name: 'Enable both scrolling & backdrop',
      scroll: true,
      backdrop: true,
    },
  ];
function SideBarLog ({name, ...props}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="outline-light" onClick={handleShow} className="mt-50">
                Меню
            </Button>

            <Offcanvas show = {show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas> SideBar</Offcanvas>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    _PLACEHOLDER_
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
function SideBar() {
    return (
      <>
        {options.map((props, idx) => (
          <SideBarLog key={idx} {...props}/>
        ))}
      </>
    );
  }
  
export default SideBar;