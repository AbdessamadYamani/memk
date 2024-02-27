export const Testimonial = ({ name, role, text, imagePath }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-blue-100 m-4">
      <img className="w-32 h-32 rounded-full mx-auto mt-4" src={imagePath} alt={`${name} profile`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{name}</div>
        <p className="text-gray-800 text-base text-center">{role}</p>
        <p className="text-gray-700 text-sm">{text}</p>
      </div>
    </div>
  );
};