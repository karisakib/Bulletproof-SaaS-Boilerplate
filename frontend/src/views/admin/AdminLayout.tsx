/**
 * * This is how the admin layout should look
 * ! https://flowbite.com/application-ui/preview/
 * ? Should we use Shadcn or flowbite?
 * TODO build out admin layout according to the design
 */

const AdminLayout: React.FC = () => {
 return (
  <div>
   <AdminTopBar />
   <main className="flex">
    <AdminSidebar />
    <AdminMainContent />
   </main>
  </div>
 );
};

function AdminTopBar() {
 return (
  <nav className="flex bg-blue-600 px-4 py-2 justify-between">
   {/* Logo */}
   <div id="logo" className="text-2xl">
    <span>SaaS</span>
   </div>

   {/* Search bar */}
    {/* <input type="text" name="search" id="search" className="w-96 bg-blue-800 rounded" /> */}

   {/* Shortcuts */}
   <div id="shortcuts" className="flex [&>span]:mx-2">
    <span>icon</span>
    <span>icon</span>
    <span>icon</span>
    <span>icon</span>
   </div>
   {/* Profile button */}
   <div id="logo" className="text-2xl">
    <picture>
     <source
      type="image/webp"
//       srcset="
// /image.webp?width=100 100w
// /image.webp?width=200 200w
// /image.webp?width=400 400w
// /image.webp?width=800 800w
// "
     />
     <img
      loading="lazy"
      alt="Alt text"
      role="presentation"
//       srcset="
// /image.png?width=100 100w
// /image.png?width=200 200w
// /image.png?width=400 400w
// /image.png?width=800 800w
// "
      sizes="(max-width: 800px) 100vw, 50vw"
      decoding="async"
      // fetchpriority="high"
      src="/image"
     />
    </picture>
   </div>
  </nav>
 );
}

function AdminSidebar() {
 return (
  <nav className="w-1/4 bg-gray-300 flex-col flex [&>span]:my-2 [&>span]:mx-4 h-screen">
   <span>link</span>
   <span>link</span>
   <span>link</span>
   <span>link</span>
   <span>link</span>
  </nav>
 );
}

function AdminMainContent() {
 return (
  <main className="w-3/4 bg-gray-100 flex-col flex [&>span]:my-2 [&>span]:mx-4 h-screen"></main>
 );
}

export default AdminLayout;
