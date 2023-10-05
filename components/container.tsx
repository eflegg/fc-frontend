type ContainerProps = {
  children: any;
  id?: string;
}

const Container: React.FC<ContainerProps>=({ children, id }) =>{
  return <div id={`${id ? id : ""}`} style={{border: ".5px solid transparent"}} className="mx-auto px-5">{children}</div>
}

export default Container;