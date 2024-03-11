import './App.css'
export default function Ux({user}){
    // console.log(user);
    const {name,email,phone,company}= user
    console.log('object');
    return(
      <div className="user">
        <h4>Name: {name}</h4>
        <h4>E-mail: {email}</h4>
        <h4>Phone: {phone}</h4>
        <h4>Company Name: {company.name}</h4>
      </div>
    )
}