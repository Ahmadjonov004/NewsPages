// import categories from "../data/data";

// const NewsPage = () => {
//   return (
//     <div>
//       <h1>Yangiliklar</h1>
//       <nav>
//         <ul>
//           {categories.map((category) => (
//             <li key={category.id}>{category.name}</li>
//           ))}
//         </ul>
//       </nav>
//       <div>
//         {categories.map((category) => (
//           <div key={category.id}>
//             <h2>{category.name}</h2>
//             {category.news.map((newsItem) => (
//               <div key={newsItem.id}>
//                 <h3>{newsItem.title}</h3>
//                 <img src={newsItem.imageUrl} alt={newsItem.title} />
//                 <p>{newsItem.description}</p>
//                 <span>{newsItem.date}</span>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsPage;
