

const Preview = (props: { preview: string }) => {
    return ( 
      <div className="card col-6 p-0 full-height">
      <div className="card-header lead">Output</div>
        <div className="card-body p-1">
          <div 
            className=""
            id="preview" 
            dangerouslySetInnerHTML={{
              __html: props.preview
            }}
          />
        </div>
      </div>
    );
}
 
export default Preview;