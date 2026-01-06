 
        const users = [
            { name: "Sara",  role: "President of the world", active: true },
            { name: "Anna", role: "Tech Seo", active: true},
            { name: "George", role: "Eat all my food", active: true},
            { name: "Max", role: "Annoying", inactive: true},
        ];  //this imitates the real database

        const cards = document.getElementById("cards");
        const stats = document.getElementById("stats");

        function renderUsers(list) {
            cards.innerHTML = "";
            list.forEach(user => {
                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `<h3>${user.name}</h3>
                <p>${user.role}</p>
                <span>${user.active ? "Active" : "Inactive"}</span>
                    `;

                    cards.appendChild(card);
                })
                    
        }
        renderUsers(users);

       //Real time statistics 

       function renderStats() {
        const total = users.length;
        const active = users.filter(u => u.active).length;
        stats.innerHTML = `
        <strong>Total: </strong> ${total} | 
        <strong>Active: </strong> ${active}`;
       }
        renderStats();

        //Live search

        const search = document.getElementById("search");
        search.addEventListener("input", () => {
            const value = search.value.toLowerCase();
            const filtered = users.filter(user => user.name.toLowerCase().includes
            (value));
            renderUsers(filtered);
        })

        //toggle theme

        let darkMode = false;
        const themeBtn = document.getElementById("themeBtn");
        themeBtn.addEventListener("click", () => {
            darkMode = !darkMode;
            document.body.classList.toggle("dark")
        })

   