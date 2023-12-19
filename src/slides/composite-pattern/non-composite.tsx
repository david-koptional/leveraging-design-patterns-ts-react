import React, { useState, useEffect } from "react";

const NonCompositeForm = () => {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    newsletter: boolean;
    // other form fields...
  }>({
    firstName: "",
    lastName: "",
    email: "",
    newsletter: false,
    // other form fields...
  });
  const [showAddressInfo, setShowAddressInfo] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Handle change for form inputs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // useEffect for Address Information visibility
  useEffect(() => {
    setShowAddressInfo(!!formData.firstName && !!formData.lastName && !!formData.email);
  }, [formData.firstName, formData.lastName, formData.email]);

  // useEffect for Details field visibility
  useEffect(() => {
    setShowDetails(formData.newsletter);
  }, [formData.newsletter]);

  return (
    <form>
      {/* Personal Information Fields */}
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      {/* Conditional Address Information Section */}
      {showAddressInfo && (
        <>
          <fieldset>
            <legend>Primary Address</legend>
            <div>
              <label>Street</label>
              <input type="text" name="street" onChange={handleChange} />
            </div>
            <div>
              <label>City</label>
              <input type="text" name="city" onChange={handleChange} />
            </div>
            {/* More fields... */}
          </fieldset>
          <fieldset>
            <legend>Secondary Address</legend>
            <div>
              <label>Secondary Street</label>
              <input type="text" name="secondaryStreet" onChange={handleChange} />
            </div>
            <div>
              <label>Secondary City</label>
              <input type="text" name="secondaryCity" onChange={handleChange} />
            </div>
            {/* More fields... */}
          </fieldset>
        </>
      )}

      {/* Preferences Section */}
      <div>
        <label>
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          Subscribe to Newsletter
        </label>
      </div>
      {showDetails && (
        <div>
          <label>Provide Details</label>
          <input type="text" name="details" onChange={handleChange} />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default NonCompositeForm;
