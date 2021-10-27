const Preview = ({ preview }) => {
    return ( 
      <div className="card col-6 p-0">
      <div className="card-header lead">Output</div>
        <div className="card-body p-1">
          <div 
            className=""
            id="preview" 
            dangerouslySetInnerHTML={{
              __html: preview
            }}
          />
        </div>
      </div>
    );
}
 
export default Preview;