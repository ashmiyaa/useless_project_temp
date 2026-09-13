function analyze() {

    const item =
        document.getElementById("item").value.trim();


    if (item === "") {

        alert(
            "Please enter something you want to buy 😭"
        );

        return;
    }


    const existing =
        document.getElementById("existing").value;

    const usage =
        document.getElementById("usage").value;

    const reason =
        document.getElementById("reason").value;

    const duration =
        document.getElementById("duration").value;


    /* =========================
       CALCULATE NEED SCORE
       ========================= */

    let need = 50;


    // Existing alternative

    if (existing === "yes") {

        need -= 25;

    } else {

        need += 20;

    }


    // Usage

    if (usage === "daily") {

        need += 20;

    }

    else if (usage === "often") {

        need += 10;

    }

    else if (usage === "sometimes") {

        need -= 5;

    }

    else {

        need -= 25;

    }


    // Reason

    if (reason === "need") {

        need += 20;

    }

    else if (reason === "better") {

        need += 5;

    }

    else if (reason === "cool") {

        need -= 10;

    }

    else if (reason === "trend") {

        need -= 15;

    }

    else {

        need -= 25;

    }


    // Duration

    if (duration === "long") {

        need += 10;

    }

    else if (duration === "medium") {

        need += 5;

    }

    else if (duration === "short") {

        need -= 5;

    }

    else {

        need -= 20;

    }


    // Keep between 0 and 100

    need =
        Math.max(
            0,
            Math.min(100, need)
        );


    const want = 100 - need;


    /* =========================
       ABSURD SCORES
       ========================= */

    const delusion =
        Math.round(
            want + Math.random() * 40
        );


    const regret =
        Math.round(
            want * 0.75 +
            Math.random() * 35
        );


    const emotional =
        Math.round(
            want * 0.9 +
            Math.random() * 15
        );


    const justification =
        Math.round(
            need * 0.5 +
            Math.random() * 40
        );


    /* =========================
       FINANCIAL IMPACT
       ========================= */

    let financial;

    if (want > 75) {

        financial = "🚨 EXTREME";

    }

    else if (want > 50) {

        financial = "⚠️ HIGH";

    }

    else if (want > 30) {

        financial = "🟡 MODERATE";

    }

    else {

        financial = "🟢 LOW";

    }


    /* =========================
       ALTERNATIVES
       ========================= */

    const alternatives =
        Math.floor(
            Math.random() * 5
        ) + 1;


    /* =========================
       VERDICT
       ========================= */

    let title;

    let text;

    let recommendation;


    if (need < 25) {

        title =
            "❌ YOU DON'T NEED IT.";

        text =
            "Our highly sophisticated system has determined that this purchase is almost completely unnecessary. Your emotional attachment is deeply concerning.";

        recommendation =
            "BUY IT ANYWAY. 🛒";

    }

    else if (need < 50) {

        title =
            "⚠️ PROBABLY UNNECESSARY.";

        text =
            "There is weak evidence supporting this purchase. However, your excuses are surprisingly creative.";

        recommendation =
            "WAIT 24 HOURS... THEN BUY IT. 💳";

    }

    else if (need < 75) {

        title =
            "🤔 YOU MIGHT NEED IT.";

        text =
            "The evidence is suspiciously reasonable. This website is beginning to question its own existence.";

        recommendation =
            "BUY IT IF YOU REALLY WANT IT.";

    }

    else {

        title =
            "✅ YOU ACTUALLY NEED IT.";

        text =
            "Congratulations. After extensive analysis, the system has determined that this purchase is genuinely useful.";

        recommendation =
            "PURCHASE APPROVED. 🎉";

    }


    /* =========================
       UPDATE PAGE
       ========================= */

    document.getElementById(
        "itemResult"
    ).innerText =
        "🛒 " + item;


    document.getElementById(
        "needScore"
    ).innerText =
        need + "%";


    document.getElementById(
        "wantScore"
    ).innerText =
        want + "%";


    document.getElementById(
        "delusionScore"
    ).innerText =
        delusion + "%";


    document.getElementById(
        "regretScore"
    ).innerText =
        regret + "%";


    document.getElementById(
        "emotional"
    ).innerText =
        emotional + "%";


    document.getElementById(
        "justification"
    ).innerText =
        justification + "%";


    document.getElementById(
        "financial"
    ).innerText =
        financial;


    document.getElementById(
        "alternatives"
    ).innerText =
        alternatives;


    document.getElementById(
        "verdictTitle"
    ).innerText =
        title;


    document.getElementById(
        "verdictText"
    ).innerText =
        text;


    document.getElementById(
        "recommendation"
    ).innerText =
        recommendation;


    /* =========================
       LOADING ANIMATION
       ========================= */

    document.getElementById(
        "inputPage"
    ).style.display =
        "none";


    document.getElementById(
        "loading"
    ).style.display =
        "block";


    let progress = 0;


    const progressBar =
        document.getElementById(
            "progressBar"
        );


    const percentage =
        document.getElementById(
            "percentage"
        );


    const loadingText =
        document.getElementById(
            "loadingText"
        );


    const messages = [

        "Checking your bank account... 💸",

        "Searching for existing alternatives... 🔍",

        "Measuring emotional attachment... 🧠",

        "Calculating financial regret... 📉",

        "Analyzing your excuses... 🤨",

        "Consulting absolutely nobody... 🗿",

        "Questioning your life choices... 😭",

        "Generating completely unnecessary statistics..."

    ];


    let messageIndex = 0;


    const interval =
        setInterval(() => {


            progress += 5;


            progressBar.style.width =
                progress + "%";


            percentage.innerText =
                progress + "%";


            if (
                progress % 10 === 0 &&
                messageIndex < messages.length
            ) {

                loadingText.innerText =
                    messages[messageIndex];

                messageIndex++;

            }


            if (progress >= 100) {

                clearInterval(interval);


                setTimeout(() => {

                    document.getElementById(
                        "loading"
                    ).style.display =
                        "none";


                    document.getElementById(
                        "result"
                    ).style.display =
                        "block";


                    /* Animate bars */

                    document.getElementById(
                        "needBar"
                    ).style.width =
                        need + "%";


                    document.getElementById(
                        "wantBar"
                    ).style.width =
                        want + "%";


                    document.getElementById(
                        "delusionBar"
                    ).style.width =
                        Math.min(
                            delusion,
                            100
                        ) + "%";


                    document.getElementById(
                        "regretBar"
                    ).style.width =
                        Math.min(
                            regret,
                            100
                        ) + "%";


                    /* Uselessness */

                    const useless =
                        Math.floor(
                            Math.random() * 8
                        ) + 1;


                    document.getElementById(
                        "uselessProgress"
                    ).style.width =
                        useless + "%";


                    document.getElementById(
                        "uselessScore"
                    ).innerText =
                        useless + "%";


                }, 500);

            }

        }, 100);

}