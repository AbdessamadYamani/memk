export const ContactForm = () => {
    return (
      <div className="bg-blue-50 p-6">
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="border p-2" />
          {/* other fields */}
          <button type="submit" className="bg-blue-500 text-white p-2">SEND</button>
        </form>
      </div>
    );
  };