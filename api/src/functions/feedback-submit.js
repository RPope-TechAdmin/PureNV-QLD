document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const sql = require("mssql");
    const formData = {
        name: document.getElementById("name").value,
        feedback: document.getElementById("feedback").value
    };
    
    const config = {
    user: "rpope@purenv.au",
    password: "Red-R0ck6341",
    server: "purenvqld.database.windows.net:1433",
    database: "Feedback",
    options: {
        encrypt: true, // Required for Azure SQL
        trustServerCertificate: false
    }};

    async function insertFeedback(name, feedback) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input("Name", sql.VarChar, name)
            .input("Feedback", sql.Text, feedback)
            .query("INSERT INTO feedback (Name, Feedback) VALUES (@name, @feedback)");

        console.log("Feedback submitted successfully!");
    } catch (err) {
        console.error("Error inserting feedback:", err);
    }
}

module.exports = { insertFeedback };
});





