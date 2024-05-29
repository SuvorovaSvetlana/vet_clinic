import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";


function ModalPage() {
      const [showModal, setShowModal] = useState(false);

      const handleClick = () => {
            setShowModal(true);
      };

      const handleClose = () => {
            setShowModal(false);
      }
      const actionBar = <div>
            <Button onClick={handleClose} primary> I Accept </Button>
      </div>
      const modal = <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                  Modal
            </p>
            </Modal>
      return (
            <div>
                  <Button onClick={handleClick} primary>Open Modal</Button>
                  {showModal && modal}
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex varius eros ultricies blandit. Pellentesque euismod tempor sollicitudin. Mauris non tempus nisi, eget gravida dui. Mauris euismod est ac arcu sagittis congue. Mauris volutpat nisl suscipit ipsum faucibus sagittis. Aenean aliquam tristique mi. Etiam euismod neque sit amet justo vehicula, feugiat volutpat purus euismod.

                        Curabitur tincidunt, neque quis eleifend ultrices, ante leo ornare sem, et condimentum dui eros eu nisl. In in elementum eros. Integer vel mauris maximus, convallis tortor ac, congue ex. Nunc elementum ultricies fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non neque at leo finibus tincidunt in a lectus. Morbi a tristique nisl. Fusce et est vel neque pellentesque pretium. Sed tincidunt sit amet ex vitae euismod. Suspendisse interdum nisl ut nunc vulputate dictum. Sed mattis ex mi, nec tristique dui viverra et. Sed et enim magna. Fusce interdum tortor ut arcu fringilla tristique. Cras suscipit massa ac dui porta, ut lobortis orci convallis. Duis eget dapibus nunc.

                        Vestibulum malesuada sapien mi, sit amet dapibus lorem pharetra vestibulum. Nulla sit amet risus eget libero varius dapibus. Pellentesque ut erat ac leo congue maximus vel non lacus. Pellentesque aliquet sollicitudin ipsum non vulputate. Aenean convallis tincidunt iaculis. Integer porttitor aliquam mi ac finibus. Fusce placerat sed diam ut pulvinar. Curabitur pharetra sit amet nisl a molestie. Mauris vitae finibus urna, et tincidunt augue. Aliquam aliquam interdum sem nec sagittis.

                        Cras semper nisi a urna vehicula ultricies. Nunc elementum quam leo, volutpat vehicula magna consectetur vitae. Etiam id laoreet velit. Praesent finibus posuere nisi, eu consequat magna aliquet nec. Fusce congue sem ut sapien mattis lobortis. Morbi sit amet lorem vitae dui tincidunt placerat. Donec molestie sapien sed risus accumsan porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique vel erat eget gravida. Sed eleifend fermentum malesuada. Cras in auctor arcu.

                        Integer imperdiet tortor nec ipsum ornare, a aliquet lectus consectetur. Curabitur cursus quam dapibus quam semper, at suscipit ante interdum. Cras et tristique purus. Integer interdum nisi quis tortor tempus, eget laoreet sem pretium. Proin auctor auctor ultricies. Etiam vel pharetra nisl, id consequat tortor. Suspendisse potenti. Morbi malesuada felis eget velit ornare efficitur. Quisque ac molestie lacus, nec tempus ipsum. Cras mattis aliquam ornare. 
                  </p>
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex varius eros ultricies blandit. Pellentesque euismod tempor sollicitudin. Mauris non tempus nisi, eget gravida dui. Mauris euismod est ac arcu sagittis congue. Mauris volutpat nisl suscipit ipsum faucibus sagittis. Aenean aliquam tristique mi. Etiam euismod neque sit amet justo vehicula, feugiat volutpat purus euismod.

                        Curabitur tincidunt, neque quis eleifend ultrices, ante leo ornare sem, et condimentum dui eros eu nisl. In in elementum eros. Integer vel mauris maximus, convallis tortor ac, congue ex. Nunc elementum ultricies fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non neque at leo finibus tincidunt in a lectus. Morbi a tristique nisl. Fusce et est vel neque pellentesque pretium. Sed tincidunt sit amet ex vitae euismod. Suspendisse interdum nisl ut nunc vulputate dictum. Sed mattis ex mi, nec tristique dui viverra et. Sed et enim magna. Fusce interdum tortor ut arcu fringilla tristique. Cras suscipit massa ac dui porta, ut lobortis orci convallis. Duis eget dapibus nunc.

                        Vestibulum malesuada sapien mi, sit amet dapibus lorem pharetra vestibulum. Nulla sit amet risus eget libero varius dapibus. Pellentesque ut erat ac leo congue maximus vel non lacus. Pellentesque aliquet sollicitudin ipsum non vulputate. Aenean convallis tincidunt iaculis. Integer porttitor aliquam mi ac finibus. Fusce placerat sed diam ut pulvinar. Curabitur pharetra sit amet nisl a molestie. Mauris vitae finibus urna, et tincidunt augue. Aliquam aliquam interdum sem nec sagittis.

                        Cras semper nisi a urna vehicula ultricies. Nunc elementum quam leo, volutpat vehicula magna consectetur vitae. Etiam id laoreet velit. Praesent finibus posuere nisi, eu consequat magna aliquet nec. Fusce congue sem ut sapien mattis lobortis. Morbi sit amet lorem vitae dui tincidunt placerat. Donec molestie sapien sed risus accumsan porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique vel erat eget gravida. Sed eleifend fermentum malesuada. Cras in auctor arcu.

                        Integer imperdiet tortor nec ipsum ornare, a aliquet lectus consectetur. Curabitur cursus quam dapibus quam semper, at suscipit ante interdum. Cras et tristique purus. Integer interdum nisi quis tortor tempus, eget laoreet sem pretium. Proin auctor auctor ultricies. Etiam vel pharetra nisl, id consequat tortor. Suspendisse potenti. Morbi malesuada felis eget velit ornare efficitur. Quisque ac molestie lacus, nec tempus ipsum. Cras mattis aliquam ornare. 
                  </p>
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex varius eros ultricies blandit. Pellentesque euismod tempor sollicitudin. Mauris non tempus nisi, eget gravida dui. Mauris euismod est ac arcu sagittis congue. Mauris volutpat nisl suscipit ipsum faucibus sagittis. Aenean aliquam tristique mi. Etiam euismod neque sit amet justo vehicula, feugiat volutpat purus euismod.

                        Curabitur tincidunt, neque quis eleifend ultrices, ante leo ornare sem, et condimentum dui eros eu nisl. In in elementum eros. Integer vel mauris maximus, convallis tortor ac, congue ex. Nunc elementum ultricies fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non neque at leo finibus tincidunt in a lectus. Morbi a tristique nisl. Fusce et est vel neque pellentesque pretium. Sed tincidunt sit amet ex vitae euismod. Suspendisse interdum nisl ut nunc vulputate dictum. Sed mattis ex mi, nec tristique dui viverra et. Sed et enim magna. Fusce interdum tortor ut arcu fringilla tristique. Cras suscipit massa ac dui porta, ut lobortis orci convallis. Duis eget dapibus nunc.

                        Vestibulum malesuada sapien mi, sit amet dapibus lorem pharetra vestibulum. Nulla sit amet risus eget libero varius dapibus. Pellentesque ut erat ac leo congue maximus vel non lacus. Pellentesque aliquet sollicitudin ipsum non vulputate. Aenean convallis tincidunt iaculis. Integer porttitor aliquam mi ac finibus. Fusce placerat sed diam ut pulvinar. Curabitur pharetra sit amet nisl a molestie. Mauris vitae finibus urna, et tincidunt augue. Aliquam aliquam interdum sem nec sagittis.

                        Cras semper nisi a urna vehicula ultricies. Nunc elementum quam leo, volutpat vehicula magna consectetur vitae. Etiam id laoreet velit. Praesent finibus posuere nisi, eu consequat magna aliquet nec. Fusce congue sem ut sapien mattis lobortis. Morbi sit amet lorem vitae dui tincidunt placerat. Donec molestie sapien sed risus accumsan porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique vel erat eget gravida. Sed eleifend fermentum malesuada. Cras in auctor arcu.

                        Integer imperdiet tortor nec ipsum ornare, a aliquet lectus consectetur. Curabitur cursus quam dapibus quam semper, at suscipit ante interdum. Cras et tristique purus. Integer interdum nisi quis tortor tempus, eget laoreet sem pretium. Proin auctor auctor ultricies. Etiam vel pharetra nisl, id consequat tortor. Suspendisse potenti. Morbi malesuada felis eget velit ornare efficitur. Quisque ac molestie lacus, nec tempus ipsum. Cras mattis aliquam ornare. 
                  </p>
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex varius eros ultricies blandit. Pellentesque euismod tempor sollicitudin. Mauris non tempus nisi, eget gravida dui. Mauris euismod est ac arcu sagittis congue. Mauris volutpat nisl suscipit ipsum faucibus sagittis. Aenean aliquam tristique mi. Etiam euismod neque sit amet justo vehicula, feugiat volutpat purus euismod.

                        Curabitur tincidunt, neque quis eleifend ultrices, ante leo ornare sem, et condimentum dui eros eu nisl. In in elementum eros. Integer vel mauris maximus, convallis tortor ac, congue ex. Nunc elementum ultricies fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non neque at leo finibus tincidunt in a lectus. Morbi a tristique nisl. Fusce et est vel neque pellentesque pretium. Sed tincidunt sit amet ex vitae euismod. Suspendisse interdum nisl ut nunc vulputate dictum. Sed mattis ex mi, nec tristique dui viverra et. Sed et enim magna. Fusce interdum tortor ut arcu fringilla tristique. Cras suscipit massa ac dui porta, ut lobortis orci convallis. Duis eget dapibus nunc.

                        Vestibulum malesuada sapien mi, sit amet dapibus lorem pharetra vestibulum. Nulla sit amet risus eget libero varius dapibus. Pellentesque ut erat ac leo congue maximus vel non lacus. Pellentesque aliquet sollicitudin ipsum non vulputate. Aenean convallis tincidunt iaculis. Integer porttitor aliquam mi ac finibus. Fusce placerat sed diam ut pulvinar. Curabitur pharetra sit amet nisl a molestie. Mauris vitae finibus urna, et tincidunt augue. Aliquam aliquam interdum sem nec sagittis.

                        Cras semper nisi a urna vehicula ultricies. Nunc elementum quam leo, volutpat vehicula magna consectetur vitae. Etiam id laoreet velit. Praesent finibus posuere nisi, eu consequat magna aliquet nec. Fusce congue sem ut sapien mattis lobortis. Morbi sit amet lorem vitae dui tincidunt placerat. Donec molestie sapien sed risus accumsan porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique vel erat eget gravida. Sed eleifend fermentum malesuada. Cras in auctor arcu.

                        Integer imperdiet tortor nec ipsum ornare, a aliquet lectus consectetur. Curabitur cursus quam dapibus quam semper, at suscipit ante interdum. Cras et tristique purus. Integer interdum nisi quis tortor tempus, eget laoreet sem pretium. Proin auctor auctor ultricies. Etiam vel pharetra nisl, id consequat tortor. Suspendisse potenti. Morbi malesuada felis eget velit ornare efficitur. Quisque ac molestie lacus, nec tempus ipsum. Cras mattis aliquam ornare. 
                  </p>
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex varius eros ultricies blandit. Pellentesque euismod tempor sollicitudin. Mauris non tempus nisi, eget gravida dui. Mauris euismod est ac arcu sagittis congue. Mauris volutpat nisl suscipit ipsum faucibus sagittis. Aenean aliquam tristique mi. Etiam euismod neque sit amet justo vehicula, feugiat volutpat purus euismod.

                        Curabitur tincidunt, neque quis eleifend ultrices, ante leo ornare sem, et condimentum dui eros eu nisl. In in elementum eros. Integer vel mauris maximus, convallis tortor ac, congue ex. Nunc elementum ultricies fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non neque at leo finibus tincidunt in a lectus. Morbi a tristique nisl. Fusce et est vel neque pellentesque pretium. Sed tincidunt sit amet ex vitae euismod. Suspendisse interdum nisl ut nunc vulputate dictum. Sed mattis ex mi, nec tristique dui viverra et. Sed et enim magna. Fusce interdum tortor ut arcu fringilla tristique. Cras suscipit massa ac dui porta, ut lobortis orci convallis. Duis eget dapibus nunc.

                        Vestibulum malesuada sapien mi, sit amet dapibus lorem pharetra vestibulum. Nulla sit amet risus eget libero varius dapibus. Pellentesque ut erat ac leo congue maximus vel non lacus. Pellentesque aliquet sollicitudin ipsum non vulputate. Aenean convallis tincidunt iaculis. Integer porttitor aliquam mi ac finibus. Fusce placerat sed diam ut pulvinar. Curabitur pharetra sit amet nisl a molestie. Mauris vitae finibus urna, et tincidunt augue. Aliquam aliquam interdum sem nec sagittis.

                        Cras semper nisi a urna vehicula ultricies. Nunc elementum quam leo, volutpat vehicula magna consectetur vitae. Etiam id laoreet velit. Praesent finibus posuere nisi, eu consequat magna aliquet nec. Fusce congue sem ut sapien mattis lobortis. Morbi sit amet lorem vitae dui tincidunt placerat. Donec molestie sapien sed risus accumsan porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique vel erat eget gravida. Sed eleifend fermentum malesuada. Cras in auctor arcu.

                        Integer imperdiet tortor nec ipsum ornare, a aliquet lectus consectetur. Curabitur cursus quam dapibus quam semper, at suscipit ante interdum. Cras et tristique purus. Integer interdum nisi quis tortor tempus, eget laoreet sem pretium. Proin auctor auctor ultricies. Etiam vel pharetra nisl, id consequat tortor. Suspendisse potenti. Morbi malesuada felis eget velit ornare efficitur. Quisque ac molestie lacus, nec tempus ipsum. Cras mattis aliquam ornare. 
                  </p>
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex varius eros ultricies blandit. Pellentesque euismod tempor sollicitudin. Mauris non tempus nisi, eget gravida dui. Mauris euismod est ac arcu sagittis congue. Mauris volutpat nisl suscipit ipsum faucibus sagittis. Aenean aliquam tristique mi. Etiam euismod neque sit amet justo vehicula, feugiat volutpat purus euismod.

                        Curabitur tincidunt, neque quis eleifend ultrices, ante leo ornare sem, et condimentum dui eros eu nisl. In in elementum eros. Integer vel mauris maximus, convallis tortor ac, congue ex. Nunc elementum ultricies fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non neque at leo finibus tincidunt in a lectus. Morbi a tristique nisl. Fusce et est vel neque pellentesque pretium. Sed tincidunt sit amet ex vitae euismod. Suspendisse interdum nisl ut nunc vulputate dictum. Sed mattis ex mi, nec tristique dui viverra et. Sed et enim magna. Fusce interdum tortor ut arcu fringilla tristique. Cras suscipit massa ac dui porta, ut lobortis orci convallis. Duis eget dapibus nunc.

                        Vestibulum malesuada sapien mi, sit amet dapibus lorem pharetra vestibulum. Nulla sit amet risus eget libero varius dapibus. Pellentesque ut erat ac leo congue maximus vel non lacus. Pellentesque aliquet sollicitudin ipsum non vulputate. Aenean convallis tincidunt iaculis. Integer porttitor aliquam mi ac finibus. Fusce placerat sed diam ut pulvinar. Curabitur pharetra sit amet nisl a molestie. Mauris vitae finibus urna, et tincidunt augue. Aliquam aliquam interdum sem nec sagittis.

                        Cras semper nisi a urna vehicula ultricies. Nunc elementum quam leo, volutpat vehicula magna consectetur vitae. Etiam id laoreet velit. Praesent finibus posuere nisi, eu consequat magna aliquet nec. Fusce congue sem ut sapien mattis lobortis. Morbi sit amet lorem vitae dui tincidunt placerat. Donec molestie sapien sed risus accumsan porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique vel erat eget gravida. Sed eleifend fermentum malesuada. Cras in auctor arcu.

                        Integer imperdiet tortor nec ipsum ornare, a aliquet lectus consectetur. Curabitur cursus quam dapibus quam semper, at suscipit ante interdum. Cras et tristique purus. Integer interdum nisi quis tortor tempus, eget laoreet sem pretium. Proin auctor auctor ultricies. Etiam vel pharetra nisl, id consequat tortor. Suspendisse potenti. Morbi malesuada felis eget velit ornare efficitur. Quisque ac molestie lacus, nec tempus ipsum. Cras mattis aliquam ornare. 
                  </p>
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex varius eros ultricies blandit. Pellentesque euismod tempor sollicitudin. Mauris non tempus nisi, eget gravida dui. Mauris euismod est ac arcu sagittis congue. Mauris volutpat nisl suscipit ipsum faucibus sagittis. Aenean aliquam tristique mi. Etiam euismod neque sit amet justo vehicula, feugiat volutpat purus euismod.

                        Curabitur tincidunt, neque quis eleifend ultrices, ante leo ornare sem, et condimentum dui eros eu nisl. In in elementum eros. Integer vel mauris maximus, convallis tortor ac, congue ex. Nunc elementum ultricies fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non neque at leo finibus tincidunt in a lectus. Morbi a tristique nisl. Fusce et est vel neque pellentesque pretium. Sed tincidunt sit amet ex vitae euismod. Suspendisse interdum nisl ut nunc vulputate dictum. Sed mattis ex mi, nec tristique dui viverra et. Sed et enim magna. Fusce interdum tortor ut arcu fringilla tristique. Cras suscipit massa ac dui porta, ut lobortis orci convallis. Duis eget dapibus nunc.

                        Vestibulum malesuada sapien mi, sit amet dapibus lorem pharetra vestibulum. Nulla sit amet risus eget libero varius dapibus. Pellentesque ut erat ac leo congue maximus vel non lacus. Pellentesque aliquet sollicitudin ipsum non vulputate. Aenean convallis tincidunt iaculis. Integer porttitor aliquam mi ac finibus. Fusce placerat sed diam ut pulvinar. Curabitur pharetra sit amet nisl a molestie. Mauris vitae finibus urna, et tincidunt augue. Aliquam aliquam interdum sem nec sagittis.

                        Cras semper nisi a urna vehicula ultricies. Nunc elementum quam leo, volutpat vehicula magna consectetur vitae. Etiam id laoreet velit. Praesent finibus posuere nisi, eu consequat magna aliquet nec. Fusce congue sem ut sapien mattis lobortis. Morbi sit amet lorem vitae dui tincidunt placerat. Donec molestie sapien sed risus accumsan porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique vel erat eget gravida. Sed eleifend fermentum malesuada. Cras in auctor arcu.

                        Integer imperdiet tortor nec ipsum ornare, a aliquet lectus consectetur. Curabitur cursus quam dapibus quam semper, at suscipit ante interdum. Cras et tristique purus. Integer interdum nisi quis tortor tempus, eget laoreet sem pretium. Proin auctor auctor ultricies. Etiam vel pharetra nisl, id consequat tortor. Suspendisse potenti. Morbi malesuada felis eget velit ornare efficitur. Quisque ac molestie lacus, nec tempus ipsum. Cras mattis aliquam ornare. 
                  </p>
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex varius eros ultricies blandit. Pellentesque euismod tempor sollicitudin. Mauris non tempus nisi, eget gravida dui. Mauris euismod est ac arcu sagittis congue. Mauris volutpat nisl suscipit ipsum faucibus sagittis. Aenean aliquam tristique mi. Etiam euismod neque sit amet justo vehicula, feugiat volutpat purus euismod.

                        Curabitur tincidunt, neque quis eleifend ultrices, ante leo ornare sem, et condimentum dui eros eu nisl. In in elementum eros. Integer vel mauris maximus, convallis tortor ac, congue ex. Nunc elementum ultricies fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non neque at leo finibus tincidunt in a lectus. Morbi a tristique nisl. Fusce et est vel neque pellentesque pretium. Sed tincidunt sit amet ex vitae euismod. Suspendisse interdum nisl ut nunc vulputate dictum. Sed mattis ex mi, nec tristique dui viverra et. Sed et enim magna. Fusce interdum tortor ut arcu fringilla tristique. Cras suscipit massa ac dui porta, ut lobortis orci convallis. Duis eget dapibus nunc.

                        Vestibulum malesuada sapien mi, sit amet dapibus lorem pharetra vestibulum. Nulla sit amet risus eget libero varius dapibus. Pellentesque ut erat ac leo congue maximus vel non lacus. Pellentesque aliquet sollicitudin ipsum non vulputate. Aenean convallis tincidunt iaculis. Integer porttitor aliquam mi ac finibus. Fusce placerat sed diam ut pulvinar. Curabitur pharetra sit amet nisl a molestie. Mauris vitae finibus urna, et tincidunt augue. Aliquam aliquam interdum sem nec sagittis.

                        Cras semper nisi a urna vehicula ultricies. Nunc elementum quam leo, volutpat vehicula magna consectetur vitae. Etiam id laoreet velit. Praesent finibus posuere nisi, eu consequat magna aliquet nec. Fusce congue sem ut sapien mattis lobortis. Morbi sit amet lorem vitae dui tincidunt placerat. Donec molestie sapien sed risus accumsan porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique vel erat eget gravida. Sed eleifend fermentum malesuada. Cras in auctor arcu.

                        Integer imperdiet tortor nec ipsum ornare, a aliquet lectus consectetur. Curabitur cursus quam dapibus quam semper, at suscipit ante interdum. Cras et tristique purus. Integer interdum nisi quis tortor tempus, eget laoreet sem pretium. Proin auctor auctor ultricies. Etiam vel pharetra nisl, id consequat tortor. Suspendisse potenti. Morbi malesuada felis eget velit ornare efficitur. Quisque ac molestie lacus, nec tempus ipsum. Cras mattis aliquam ornare. 
                  </p>
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex varius eros ultricies blandit. Pellentesque euismod tempor sollicitudin. Mauris non tempus nisi, eget gravida dui. Mauris euismod est ac arcu sagittis congue. Mauris volutpat nisl suscipit ipsum faucibus sagittis. Aenean aliquam tristique mi. Etiam euismod neque sit amet justo vehicula, feugiat volutpat purus euismod.

                        Curabitur tincidunt, neque quis eleifend ultrices, ante leo ornare sem, et condimentum dui eros eu nisl. In in elementum eros. Integer vel mauris maximus, convallis tortor ac, congue ex. Nunc elementum ultricies fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non neque at leo finibus tincidunt in a lectus. Morbi a tristique nisl. Fusce et est vel neque pellentesque pretium. Sed tincidunt sit amet ex vitae euismod. Suspendisse interdum nisl ut nunc vulputate dictum. Sed mattis ex mi, nec tristique dui viverra et. Sed et enim magna. Fusce interdum tortor ut arcu fringilla tristique. Cras suscipit massa ac dui porta, ut lobortis orci convallis. Duis eget dapibus nunc.

                        Vestibulum malesuada sapien mi, sit amet dapibus lorem pharetra vestibulum. Nulla sit amet risus eget libero varius dapibus. Pellentesque ut erat ac leo congue maximus vel non lacus. Pellentesque aliquet sollicitudin ipsum non vulputate. Aenean convallis tincidunt iaculis. Integer porttitor aliquam mi ac finibus. Fusce placerat sed diam ut pulvinar. Curabitur pharetra sit amet nisl a molestie. Mauris vitae finibus urna, et tincidunt augue. Aliquam aliquam interdum sem nec sagittis.

                        Cras semper nisi a urna vehicula ultricies. Nunc elementum quam leo, volutpat vehicula magna consectetur vitae. Etiam id laoreet velit. Praesent finibus posuere nisi, eu consequat magna aliquet nec. Fusce congue sem ut sapien mattis lobortis. Morbi sit amet lorem vitae dui tincidunt placerat. Donec molestie sapien sed risus accumsan porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique vel erat eget gravida. Sed eleifend fermentum malesuada. Cras in auctor arcu.

                        Integer imperdiet tortor nec ipsum ornare, a aliquet lectus consectetur. Curabitur cursus quam dapibus quam semper, at suscipit ante interdum. Cras et tristique purus. Integer interdum nisi quis tortor tempus, eget laoreet sem pretium. Proin auctor auctor ultricies. Etiam vel pharetra nisl, id consequat tortor. Suspendisse potenti. Morbi malesuada felis eget velit ornare efficitur. Quisque ac molestie lacus, nec tempus ipsum. Cras mattis aliquam ornare. 
                  </p>
                  <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex varius eros ultricies blandit. Pellentesque euismod tempor sollicitudin. Mauris non tempus nisi, eget gravida dui. Mauris euismod est ac arcu sagittis congue. Mauris volutpat nisl suscipit ipsum faucibus sagittis. Aenean aliquam tristique mi. Etiam euismod neque sit amet justo vehicula, feugiat volutpat purus euismod.

                        Curabitur tincidunt, neque quis eleifend ultrices, ante leo ornare sem, et condimentum dui eros eu nisl. In in elementum eros. Integer vel mauris maximus, convallis tortor ac, congue ex. Nunc elementum ultricies fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non neque at leo finibus tincidunt in a lectus. Morbi a tristique nisl. Fusce et est vel neque pellentesque pretium. Sed tincidunt sit amet ex vitae euismod. Suspendisse interdum nisl ut nunc vulputate dictum. Sed mattis ex mi, nec tristique dui viverra et. Sed et enim magna. Fusce interdum tortor ut arcu fringilla tristique. Cras suscipit massa ac dui porta, ut lobortis orci convallis. Duis eget dapibus nunc.

                        Vestibulum malesuada sapien mi, sit amet dapibus lorem pharetra vestibulum. Nulla sit amet risus eget libero varius dapibus. Pellentesque ut erat ac leo congue maximus vel non lacus. Pellentesque aliquet sollicitudin ipsum non vulputate. Aenean convallis tincidunt iaculis. Integer porttitor aliquam mi ac finibus. Fusce placerat sed diam ut pulvinar. Curabitur pharetra sit amet nisl a molestie. Mauris vitae finibus urna, et tincidunt augue. Aliquam aliquam interdum sem nec sagittis.

                        Cras semper nisi a urna vehicula ultricies. Nunc elementum quam leo, volutpat vehicula magna consectetur vitae. Etiam id laoreet velit. Praesent finibus posuere nisi, eu consequat magna aliquet nec. Fusce congue sem ut sapien mattis lobortis. Morbi sit amet lorem vitae dui tincidunt placerat. Donec molestie sapien sed risus accumsan porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique vel erat eget gravida. Sed eleifend fermentum malesuada. Cras in auctor arcu.

                        Integer imperdiet tortor nec ipsum ornare, a aliquet lectus consectetur. Curabitur cursus quam dapibus quam semper, at suscipit ante interdum. Cras et tristique purus. Integer interdum nisi quis tortor tempus, eget laoreet sem pretium. Proin auctor auctor ultricies. Etiam vel pharetra nisl, id consequat tortor. Suspendisse potenti. Morbi malesuada felis eget velit ornare efficitur. Quisque ac molestie lacus, nec tempus ipsum. Cras mattis aliquam ornare. 
                  </p>

            </div>
 
      );
}

export default ModalPage;