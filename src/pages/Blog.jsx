import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/BlogCard";

export default function Recipes() {
  const recipes = [
    {
      title: "Terrible Twos",
      image: "/images/gallery/img_1.jpg",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.",
      authorImg: "/images/chefs/img_1.jpg",
    },
    {
      title: "Potty Training",
      image: "/images/gallery/img_2.jpg",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.",
      authorImg: "/images/chefs/img_1.jpg",
    },
    {
      title: "Sibling Rivalry",
      image: "/images/gallery/img_3.jpg",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.',
      authorImg: "/images/chefs/img_2.jpg",
    },
    {
      title: "Sleep Tricks",
      image: "/images/gallery/img_4.jpg",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.',
      authorImg: "/images/chefs/img_3.jpg",
    },
    {
      title: "Bath Time",
      image: "/images/gallery/img_5.jpg",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.',
      authorImg: "/images/chefs/img_4.jpg",
    },
    {
      title: "Summertime Activities",
      image: "/images/gallery/img_6.jpg",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.',
      authorImg: "/images/chefs/img_5.jpg",
    },
    {
      title: "Disciple and Timeout",
      image: "/images/gallery/img_7.jpg",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.',
      authorImg: "/images/chefs/img_6.jpg",
    },
    {
      title: "Summer Pasta with Mint",
      image: "/images/gallery/img_8.jpg",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.',
      authorImg: "/images/chefs/img_6.jpg",
    },
    {
      title: "Boundaries",
      image: "/images/gallery/img_9.jpg",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.',
      authorImg: "/images/chefs/img_5.jpg",
    },
    {
      title: "Gentle Parenting",
      image: "/images/gallery/img_10.jpg",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.',
      authorImg: "/images/chefs/img_7.jpg",
    },
    {
      title: "Finding the Right Daycare",
      image: "/images/gallery/img_11.jpg",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.',
      authorImg: "/images/chefs/img_5.jpg",
    },
    {
      title: "Music and the Yound Mind",
      image: "/images/gallery/img_12.jpg",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nunc id cursus metus aliquam. Lectus urna duis convallis convallis tellus id interdum velit. Orci a scelerisque purus semper eget duis at tellus at. In massa tempor nec feugiat. Nunc consequat interdum varius sit amet. Vitae nunc sed velit dignissim sodales. Nibh sit amet commodo nulla facilisi nullam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ac orci phasellus egestas tellus rutrum tellus. Elementum nisi quis eleifend quam adipiscing vitae. Aliquam ut porttitor leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu.',
      authorImg: "/images/chefs/img_7.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {/* <RecipeCard /> */}
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
