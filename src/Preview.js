const Preview = ({ preview }) => {
    return ( 
    <div 
        id="preview" 
        style={{
          width: 685, 
          height:200, 
          backgroundColor: "white"
        }}
        dangerouslySetInnerHTML={{
          __html: preview
        }}
    />
    );
}
 
export default Preview;