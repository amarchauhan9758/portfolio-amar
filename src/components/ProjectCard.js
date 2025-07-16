const ProjectCard = ({ title, image, description, link }) => {
  if (!title || !image || !description || !link) return null; // Prevent empty cards

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-72 flex-shrink-0 rounded-xl overflow-hidden shadow-lg shadow-black/30 transition-transform transform hover:scale-105 bg-white dark:bg-stone-800"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
