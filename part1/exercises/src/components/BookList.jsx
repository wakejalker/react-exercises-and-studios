export default function BookList() {
   let pageTitle = "Cookbooks I Own";
   let book1 = "https://target.scene7.com/is/image/Target/GUEST_1cf444f1-4c70-493a-ba09-3437292e69b5?wid=488&hei=488&fmt=pjpeg";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGadnzGQvQuu3rWUZja_WpAhtlTC95FWmQ918hbs8E49ypGDOSLJk-CriTg_aV_ztidw0&usqp=CAU";
   let book3 = "https://i5.walmartimages.com/seo/F-ck-That-s-Delicious-An-Annotated-Guide-to-Eating-Well-Hardcover_e257e766-051e-465a-abd0-fc715aa91105.77293ffb5b57a084592abd731bfbb724.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Chrissy Teigen's second cookbook, Hungry For More" />
         <img src={book2} alt="The Flavor Bible" />
         <img src={book3} alt="Cookbook/memoir combo, F*ck, That's Delicious: An Annotated Guide to Eating Well" />
      </div>      
   );
}