function NotFoundPage(): JSX.Element {
  return(
    <>
      <h1 style={{textAlign:'center'}}>404 Not Found</h1>
      <div style={{width:'100%', height:'100%', display:'flex',justifyContent:'center', alignItems:'center'}}>
        <img src="../public/img/not_found.jpg" alt="not found" style={{width:'30%', marginTop:'100px'}} />
      </div>
    </>
  );
}

export default NotFoundPage;
