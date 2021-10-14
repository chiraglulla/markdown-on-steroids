const Preview = ({ preview }) => {
    return ( 
      <div 
        id="preview" 
        dangerouslySetInnerHTML={{
          __html: preview
        }}
      />
    );
}
 
export default Preview;