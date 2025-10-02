type Props = {
  title: string;
  price?: string;
  image?: string;
  features?: string[];
}

export default function PropertyCard({title, price, image='/images/placeholder.jpg', features=[]}:Props){
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-48 bg-gray-100" style={{backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundPosition:'center'}} />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        {price && <p className="text-sm text-gray-600 mt-1">{price}</p>}
        <ul className="mt-3 flex gap-2 flex-wrap">
          {features.map((f,i)=> <li key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{f}</li>)}
        </ul>
        <div className="mt-4 flex justify-between items-center">
          <a href="#" className="text-primary font-medium">Details →</a>
          <button className="px-3 py-2 bg-primary text-white rounded-md">Book Visit</button>
        </div>
      </div>
    </div>
  )
}
