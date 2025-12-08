/* quizLogic.js (module) - FULL PATCHED VERSION
   Works with: <script type="module" src=".../quizLogic.js"></script>
*/

/* -------------------------
   IMPORT (edit path if needed)
--------------------------*/
import {
    questions1,
    questions2,
    questions3,
    questions4,
    quizQuestions5,
    quizQuestions6,
    quizQuestions7,
    quizQuestions8,
    quizQuestions9,
    quizQuestions10,
    quizQuestions11,
    quizQuestions12,
    quizQuestions13
} from "./weeklyQuiz.js";

import { 
    quizQuestions14, 
    quizQuestions15,
    quizQuestions16,
    quizQuestions17,
    quizQuestions18,
    quizQuestions19,
    quizQuestions20,
    quizQuestions21,
    quizQuestions22,
    quizQuestions23,
    quizQuestions24,
    quizQuestions25,
    quizQuestions26
} from "./subjectWiseQuiz.js";

/* -------------------------
   EXPOSE to window (keeps backward compatibility)
--------------------------*/
window.questions1 = questions1;
window.questions2 = questions2;
window.questions3 = questions3;
window.questions4 = questions4;
window.quizQuestions5 = quizQuestions5;
window.quizQuestions6 = quizQuestions6;
window.quizQuestions7 = quizQuestions7;
window.quizQuestions8 = quizQuestions8;
window.quizQuestions9 = quizQuestions9;
window.quizQuestions10 = quizQuestions10;
window.quizQuestions11 = quizQuestions11;
window.quizQuestions12 = quizQuestions12;
window.quizQuestions13 = quizQuestions13;
window.quizQuestions14 = quizQuestions14;
window.quizQuestions15 = quizQuestions15;
window.quizQuestions16 = quizQuestions16;
window.quizQuestions17 = quizQuestions17;
window.quizQuestions18 = quizQuestions18;
window.quizQuestions19 = quizQuestions19;
window.quizQuestions20 = quizQuestions20;
window.quizQuestions21 = quizQuestions21;
window.quizQuestions22 = quizQuestions22;
window.quizQuestions23 = quizQuestions23;
window.quizQuestions24 = quizQuestions24;
window.quizQuestions25 = quizQuestions25;
window.quizQuestions26 = quizQuestions26;

/* -------------------------
   Group variables
--------------------------*/
const groupVars = [
    "questions1","questions2","questions3","questions4",
    "quizQuestions5","quizQuestions6","quizQuestions7","quizQuestions8",
    "quizQuestions9","quizQuestions10","quizQuestions11","quizQuestions12","quizQuestions13",
    "quizQuestions14","quizQuestions15","quizQuestions16","quizQuestions17",
    "quizQuestions18","quizQuestions19","quizQuestions20","quizQuestions21",
    "quizQuestions22","quizQuestions23","quizQuestions24","quizQuestions25","quizQuestions26"
];

const groupLabels = groupVars.map((_, i) => `Group ${i+1}`);

/* -------------------------
   State
--------------------------*/
let masterGroups = {};
let currentQuestions = [];
let perPage = 10;
let currentPage = 1;
let totalPages = 1;
let quizAnswers = {};
let flagged = new Set();
let timerInterval = null;
let timerRemaining = 0;
let timerTotal = 0;

let filteredMode = false;      // true when filters applied
let filteredIndexes = [];      // indexes shown in filtered mode

/* -------------------------
   DOM refs
--------------------------*/
const groupList = document.getElementById('groupList');
const selectAllGroups = document.getElementById('selectAllGroups');
const startBtn = document.getElementById('startBtn');
const loadAllBtn = document.getElementById('loadAllBtn');
const quizArea = document.getElementById('quizArea');
// const quizArea = document.querySelectorAll('quiz-area');
const container = document.getElementById('questionsContainer');

const shuffleBtn = document.getElementById('shuffleBtn');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');
const showAnswersBtn = document.getElementById('showAnswersBtn');
const exportPdfBtn = document.getElementById('exportPdfBtn');

const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const currentPageSpan = document.getElementById('currentPage');
const totalPagesSpan = document.getElementById('totalPages');

const resultDiv = document.getElementById('result');
const progressSummary = document.getElementById('progressSummary');
const dotGrid = document.getElementById('dotGrid');
const flagJumpBtn = document.getElementById('flagJumpBtn');

const enableTimer = document.getElementById('enableTimer');
const timerSelect = document.getElementById('timerSelect');
const timerCustom = document.getElementById('timerCustom');
const timerWrapper = document.getElementById('timerWrapper');
const timerBar = document.getElementById('timerBar');
const timeText = document.getElementById('timeText');

const darkModeToggle = document.getElementById('darkModeToggle');

/* -------------------------
   Load master groups from window
--------------------------*/
function loadMasterGroups() {
    masterGroups = {};
    groupVars.forEach(gv => {
        const arr = window[gv];
        if (Array.isArray(arr)) {
            // deep clone so shuffling doesn't mutate original
            masterGroups[gv] = arr.map(q => JSON.parse(JSON.stringify(q)));
        } else {
            masterGroups[gv] = [];
        }
    });
}
loadMasterGroups();

/* -------------------------
   Render group selection UI
--------------------------*/
// function renderGroupList() {
//     groupList.innerHTML = "";
//     groupLabels.forEach((label, idx) => {
//         const gv = groupVars[idx];
//         const div = document.createElement('div');
//         div.className = 'form-check';
//         div.innerHTML = `
//             <input class="form-check-input" type="checkbox" id="grp_${idx}" data-gv="${gv}">
//             <label class="form-check-label" for="grp_${idx}">
//                 ${label} (${masterGroups[gv].length})
//             </label>
//         `;
//         groupList.appendChild(div);
//     });
// }

function renderGroupList() {
    groupList.innerHTML = "";

    /* --- SELECT ALL CHECKBOX HEADER --- */
    const header = document.createElement("div");
    header.className = "d-flex align-items-center mb-3 flex-wrap gap-2";

    header.innerHTML = `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="selectAllGroupsTop">
            <label class="form-check-label fw-semibold" for="selectAllGroupsTop">
                Select All Groups
            </label>
        </div>
    `;

    groupList.appendChild(header);

    /* --- RESPONSIVE HORIZONTAL LIST GROUP --- */
    const wrapper = document.createElement("div");
    wrapper.className = "d-flex flex-row flex-wrap gap-3";

    groupLabels.forEach((label, idx) => {
        const gv = groupVars[idx];

        const card = document.createElement("div");
        card.className = `
            list-group-item 
            d-flex 
            align-items-center 
            justify-content-between 
            p-3 
            shadow-sm 
            rounded 
            border 
            flex-grow-1 
            flex-sm-grow-0
        `;

        card.style.minWidth = "260px";  // for horizontal scrolling on mobile

        card.innerHTML = `
            <div class="d-flex align-items-start">
                <input class="form-check-input me-2 mt-1" 
                       type="checkbox" 
                       id="grp_${idx}" 
                       data-gv="${gv}">
                <div>
                    <div class="fw-bold">${label}</div>
                    <small class="text-muted">${gv}</small>
                </div>
            </div>

            <span class="badge text-bg-primary rounded-pill ms-2">
                ${masterGroups[gv].length}
            </span>
        `;

        wrapper.appendChild(card);
    });

    groupList.appendChild(wrapper);

    /* --- MAKE SELECT-ALL WORK FOR BOTH TOP + MAIN SWITCH --- */
    const selectAllTop = document.getElementById("selectAllGroupsTop");
    const allBoxes = () => wrapper.querySelectorAll("input[type='checkbox']");

    selectAllTop.addEventListener("change", () => {
        allBoxes().forEach(cb => cb.checked = selectAllTop.checked);
    });

    // Keep top header synced with individual selections
    wrapper.addEventListener("change", () => {
        const boxes = allBoxes();
        const allChecked = [...boxes].every(cb => cb.checked);
        selectAllTop.checked = allChecked;
    });
}
renderGroupList();

selectAllGroups.addEventListener('change', () => {
    groupList.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = selectAllGroups.checked);
});
loadAllBtn.addEventListener('click', () => {
    groupList.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = true);
});

/* -------------------------
   Start Quiz
--------------------------*/
startBtn.addEventListener('click', () => {
    const selected = [...groupList.querySelectorAll("input[type='checkbox'][id^='grp_']")]
    .filter(cb => cb.checked)
    .map(cb => cb.dataset.gv);

    // const selected = Array.from(groupList.querySelectorAll('input[type=checkbox]:checked')).map(n => n.dataset.gv);
    if (!selected.length) {
        alert("Please select at least one group.");
        return;
    }

    // build currentQuestions from selected groups
    currentQuestions = [];
    selected.forEach(gv => {
        masterGroups[gv].forEach(q => currentQuestions.push(JSON.parse(JSON.stringify(q))));
    });

    // load persisted answers & flags
    quizAnswers = JSON.parse(localStorage.getItem("quizAnswers_v2") || "{}");
    flagged = new Set(JSON.parse(localStorage.getItem("flagged_v2") || "[]"));

    filteredMode = false;
    filteredIndexes = [];

    currentPage = 1;
    perPage = 1;
    totalPages = Math.max(1, Math.ceil(currentQuestions.length / perPage));
    updatePageIndicators();

    quizArea.style.display = 'block';
    renderQuestions();
    updateProgressUI();
});

/* -------------------------
   TIMER (kept simple)
--------------------------*/
function startTimer() {
    stopTimer();
    updateTimerUI();
    timerInterval = setInterval(() => {
        timerRemaining--;
        if (timerRemaining <= 0) {
            stopTimer();
            alert("Time is up — auto-submitting.");
            showResult();
        }
        updateTimerUI();
    }, 1000);
}
function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
}
function updateTimerUI() {
    if (timerTotal <= 0) return;
    const pct = Math.max(0, (timerRemaining / timerTotal) * 100);
    timerBar.style.width = pct + "%";
    const mm = String(Math.floor(timerRemaining / 60)).padStart(2, "0");
    const ss = String(timerRemaining % 60).padStart(2, "0");
    timeText.textContent = `${mm}:${ss}`;
}

/* -------------------------
   Pagination controls
--------------------------*/
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) currentPage--;
    renderQuestions();
    updatePageIndicators();
});
nextPageBtn.addEventListener('click', () => {
    if (currentPage < totalPages) currentPage++;
    renderQuestions();
    updatePageIndicators();
});
function updatePageIndicators() {
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
}

/* -------------------------
   Utility
--------------------------*/
function shuffleArray(arr) {
    return arr.map(v=>({v,r:Math.random()})).sort((a,b)=>a.r-b.r).map(o=>o.v);
}

/* -------------------------
   Render single question (used by paginated and filtered)
   Important: inputs remain enabled so user can change answers in filtered mode
--------------------------*/
function renderSingleQuestion(i) {
    const q = currentQuestions[i];
    const card = document.createElement("div");
    card.className = "card mb-3";

    if (flagged.has(String(i))) card.classList.add("flagged");

    const qBody = document.createElement("div");
    qBody.className = "card-body";

    // header with flag button
    const headerRow = document.createElement("div");
    headerRow.className = "d-flex justify-content-between align-items-center mb-2";
    const qTitle = document.createElement("h6");
    qTitle.className = "card-title mb-0";
    qTitle.textContent = `Q${i + 1}. ${q.q}`;
    headerRow.appendChild(qTitle);

    // flag button (reflect flagged state)
    const rightControls = document.createElement("div");
    const isFlaggedNow = flagged.has(String(i));
    rightControls.innerHTML = `
        <button type="button" class="btn btn-sm ${isFlaggedNow ? "btn-warning" : "btn-outline-warning"} me-2 flagBtn">Flag</button>
    `;
    headerRow.appendChild(rightControls);
    qBody.appendChild(headerRow);

// ========================== RENDER OPTIONS ==========================================================
// Render options (MCQ / match / alphalist)
        
        if (q.type === "match") {
            const table = document.createElement("table");
            table.className = "table table-bordered mt-2";

            table.innerHTML = `
                <thead>
                    <tr><th>List I</th><th>List II</th></tr>
                </thead>
            `;

            const tbody = document.createElement("tbody");
            const maxLen = Math.max(q.list1.length, q.list2.length);

            for (let r = 0; r < maxLen; r++) {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${q.list1[r] || ""}</td>
                    <td>${q.list2[r] || ""}</td>
                `;
                tbody.appendChild(tr);
            }
            table.appendChild(tbody);
            qBody.appendChild(table);
            
        }

        else if (q.type === "alphalist") {

            // Show the list items (A, B, C, D...)
            const ul = document.createElement("ul");
            ul.className = "mt-2";

            (q.list1 || []).forEach(text => {
                const li = document.createElement("li");
                li.textContent = text;
                ul.appendChild(li);
            });

            qBody.appendChild(ul);
        }

       

// options
    const opts = document.createElement("div");
    opts.className = "mt-2";

    (q.options || []).forEach((opt, optIdx) => {
        const optId = `q${i}_opt${optIdx}`;
        const div = document.createElement("div");
        div.className = "form-check";

        const input = document.createElement("input");
        input.className = "form-check-input";
        input.type = "radio";
        input.name = `q${i}`;
        input.id = optId;
        input.value = String(optIdx);
        input.dataset.index = String(optIdx);

        // check if user previously answered
        if (quizAnswers[`q${i}`] !== undefined && String(quizAnswers[`q${i}`]) === String(optIdx)) {
            input.checked = true;
        }

        // event listener to save answer
        input.addEventListener("change", () => {
            quizAnswers[`q${i}`] = String(optIdx);
            persistAnswers();
            updateDotForIndex(i);
            updateProgressUI();
        });

        const label = document.createElement("label");
        label.className = "form-check-label option-label";
        // ensure proper attribute for query selector later:
        label.setAttribute("for", optId);
        label.textContent = opt;

        div.appendChild(input);
        div.appendChild(label);
        opts.appendChild(div);
    });
    qBody.appendChild(opts);
// ========================== RENDER OPTIONS ==========================================================
    
    card.appendChild(qBody);
    container.appendChild(card);

    // attach flag listener
    const flagBtn = card.querySelector(".flagBtn");
    flagBtn.addEventListener("click", () => {
        const key = String(i);
        if (flagged.has(key)) {
            flagged.delete(key);
            flagBtn.classList.remove("btn-warning");
            flagBtn.classList.add("btn-outline-warning");
            card.classList.remove("flagged");
        } else {
            flagged.add(key);
            flagBtn.classList.remove("btn-outline-warning");
            flagBtn.classList.add("btn-warning");
            card.classList.add("flagged");
        }
        persistFlags();
        updateDotForIndex(i);
        updateProgressUI();
    });
}

/* -------------------------
   Render paginated questions
--------------------------*/
function renderQuestions() {
    filteredMode = false;
    filteredIndexes = [];
    container.innerHTML = "";

    if (!currentQuestions.length) return;

    const start = (currentPage - 1) * perPage;
    const end = Math.min(currentQuestions.length, start + perPage);

    for (let i = start; i < end; i++) {
        renderSingleQuestion(i);
    }

    // restore pagination controls
    prevPageBtn.style.display = "";
    nextPageBtn.style.display = "";
}

/* -------------------------
   Persisting answers & flags
--------------------------*/
function persistAnswers() {
    localStorage.setItem("quizAnswers_v2", JSON.stringify(quizAnswers));
}
function persistFlags() {
    localStorage.setItem("flagged_v2", JSON.stringify([...flagged]));
}

/* -------------------------
   Dot grid & progress
--------------------------*/
function updateDotForIndex(i) {
    const dot = dotGrid.children[i];
    if (!dot) return;
    const key = String(i);
    dot.className = "question-dot";
    if (flagged.has(key)) dot.classList.add("dot-flagged");
    else if (quizAnswers[`q${i}`] !== undefined) dot.classList.add("dot-answered");
    else dot.classList.add("dot-unanswered");
}

function updateProgressUI() {
    const total = currentQuestions.length;
    const answered = Object.keys(quizAnswers).filter(k => k.startsWith("q")).length;
    progressSummary.textContent = `Progress: ${answered} / ${total} answered • Flagged: ${flagged.size}`;

    // rebuild dot grid (size = currentQuestions.length)
    dotGrid.innerHTML = "";
    for (let i = 0; i < currentQuestions.length; i++) {
        const dot = document.createElement("span");
        dot.className = "question-dot fw-semibold d-inline-flex align-items-center justify-content-center";
        dot.innerHTML = `${i+1}`;
        dot.title = `Q${i+1}`;

        if (flagged.has(String(i))) dot.classList.add("dot-flagged");
        else if (quizAnswers[`q${i}`] !== undefined) dot.classList.add("dot-answered");
        else dot.classList.add("dot-unanswered");

        dot.addEventListener("click", () => {
            // if in filtered mode and the clicked dot is not in filteredIndexes, compute page for the index
            currentPage = Math.floor(i / perPage) + 1;
            renderQuestions();
            updatePageIndicators();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        dotGrid.appendChild(dot);
    }
}

/* -------------------------
   Score calculation
--------------------------*/
function calculateScore() {
    let score = 0;
    currentQuestions.forEach((q, i) => {
        const chosen = quizAnswers[`q${i}`];
        if (chosen !== undefined && Number(chosen) === q.a) score++;
    });
    return { score, total: currentQuestions.length };
}

/* -------------------------
   Show result panel
--------------------------*/
function showResult() {
    const res = calculateScore();
    const pct = res.total ? Math.round((res.score / res.total) * 100) : 0;
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <div class="alert alert-primary">
            You scored <strong>${res.score}</strong> of <strong>${res.total}</strong> (${pct}%)
        </div>
        <button id="revealWrong" class="btn btn-sm btn-outline-danger">Show Answers</button>
        <button id="closeRes" class="btn btn-sm btn-outline-secondary">Close</button>
    `;
    document.getElementById("revealWrong").addEventListener("click", showCorrectAnswers);
    document.getElementById("closeRes").addEventListener("click", () => resultDiv.style.display = "none");
}

/* -------------------------
   Robust showCorrectAnswers (reads saved answer first)
--------------------------*/
function showCorrectAnswers() {
    // works on current view (paginated or filtered)
    const indexesToProcess = [];

    if (!filteredMode) {
        const start = (currentPage - 1) * perPage;
        const end = Math.min(currentQuestions.length, start + perPage);
        for (let i = start; i < end; i++) indexesToProcess.push(i);
    } else {
        // filtered mode: filteredIndexes holds global indexes
        indexesToProcess.push(...filteredIndexes);
    }

    indexesToProcess.forEach(i => {
        // find the corresponding card in DOM
        // when paginated: container.children[i - start], when filtered: find by question number title
        const cards = Array.from(container.children);
        // find card whose title starts with Q(i+1).
        const card = cards.find(c => {
            const h6 = c.querySelector('h6');
            return h6 && h6.textContent.trim().startsWith(`Q${i+1}.`);
        });
        if (!card) return;

        const q = currentQuestions[i];
        const userChosenRaw = quizAnswers[`q${i}`];
        const userChosen = userChosenRaw === undefined ? null : Number(userChosenRaw);

        const inputs = Array.from(card.querySelectorAll("input[type='radio']"));

        // clear previous classes
        inputs.forEach(inp => {
            const label = card.querySelector(`label[for="${inp.id}"]`) || inp.closest('label') || inp.parentElement.querySelector('label');
            if (label) label.classList.remove("text-success", "text-danger", "fw-bold", "fw-semibold");
        });

        // mark correct and user's wrong
        inputs.forEach(inp => {
            const idx = Number(inp.dataset.index ?? inp.value ?? NaN);
            const label = card.querySelector(`label[for="${inp.id}"]`) || inp.closest('label') || inp.parentElement.querySelector('label');
            if (!label) return;

            if (idx === q.a) {
                label.classList.add("text-success", "fw-bold");
            }
            if (userChosen !== null && idx === userChosen && idx !== q.a) {
                label.classList.add("text-danger", "fw-semibold");
            }
        });

        // optionally set the correct radio checked after marking;
        // comment out if you want user's selection to remain visually checked
        inputs.forEach(inp => {
            const idx = Number(inp.dataset.index ?? inp.value ?? NaN);
            if (idx === q.a) inp.checked = true;
        });
    });
}

/* -------------------------
   Reset
--------------------------*/
function resetQuiz() {
    if (!confirm("Reset your quiz answers?")) return;
    quizAnswers = {};
    flagged = new Set();
    persistAnswers();
    persistFlags();
    renderQuestions();
    updateProgressUI();
    resultDiv.style.display = "none";
}

/* -------------------------
   Shuffle (preserve correct answer mapping)
--------------------------*/
shuffleBtn.addEventListener("click", () => {
    quizAnswers = {};
    flagged = new Set();
    persistAnswers();
    persistFlags();

    currentQuestions = shuffleArray(currentQuestions);

    // if options exist, shuffle each option array and re-map correct index
    currentQuestions.forEach(q => {
        if (Array.isArray(q.options)) {
            const correct = q.options[q.a];
            q.options = shuffleArray(q.options);
            q.a = q.options.indexOf(correct);
        }
    });

    currentPage = 1;
    totalPages = Math.max(1, Math.ceil(currentQuestions.length / perPage));
    updatePageIndicators();
    renderQuestions();
});

/* -------------------------
   Button event wiring
--------------------------*/
checkBtn.addEventListener("click", showResult);
resetBtn.addEventListener("click", resetQuiz);
showAnswersBtn.addEventListener("click", showCorrectAnswers);

/* -------------------------
   Flag Jump (existing behavior)
--------------------------*/
flagJumpBtn.addEventListener("click", () => {
    if (flagged.size === 0) return alert("No flagged questions.");
    const first = [...flagged][0];
    currentPage = Math.floor(first / perPage) + 1;
    renderQuestions();
    updatePageIndicators();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* -------------------------
   FILTERS: Answered / Not Answered / Flagged
--------------------------*/
function renderFiltered() {
    const showAnswered = document.getElementById("filterAnswered")?.checked;
    const showNotAnswered = document.getElementById("filterNotAnswered")?.checked;
    const showFlagged = document.getElementById("filterFlagged")?.checked;
    const showWrong = document.getElementById("filterWrong")?.checked;   // <<< NEW

    // if no filters selected -> revert to normal paginated view
    if (!showAnswered && !showNotAnswered && !showFlagged && !showWrong) {
        filteredMode = false;
        filteredIndexes = [];
        renderQuestions();
        updatePageIndicators();
        return;
    }



    // build filtered list of global indexes
    filteredIndexes = [];

    currentQuestions.forEach((q, i) => {
        const chosen = quizAnswers[`q${i}`];
        const answered = chosen !== undefined;
        const notAnswered = chosen === undefined;
        const isFlagged = flagged.has(String(i));
        const isWrong = answered && Number(chosen) !== q.a;   // <<< NEW

        let match = false;

        if (showAnswered && answered) match = true;
        if (showNotAnswered && notAnswered) match = true;
        if (showFlagged && isFlagged) match = true;
        if (showWrong && isWrong) match = true;   // <<< NEW

        if (match) filteredIndexes.push(i);
    });

    // render filtered (full list, no pagination)
    filteredMode = true;
    container.innerHTML = "";
    filteredIndexes.forEach(i => renderSingleQuestion(i));

     // **NEW: if "Wrong" filter is active, show correct+wrong markings**
    if (showWrong) {
        // showCorrectAnswers works on filteredMode and filteredIndexes
        showCorrectAnswers();
    }

    // hide pagination controls while filtered
    prevPageBtn.style.display = "none";
    nextPageBtn.style.display = "none";
    currentPageSpan.textContent = "Filtered";
    totalPagesSpan.textContent = "";
}

/* Hook apply/clear filter buttons if present */
const applyBtn = document.getElementById("applyFilters");
if (applyBtn) applyBtn.addEventListener("click", renderFiltered);

const clearBtn = document.getElementById("clearFilters");
if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        document.getElementById("filterAnswered").checked = false;
        document.getElementById("filterNotAnswered").checked = false;
        document.getElementById("filterFlagged").checked = false;
        filteredMode = false;
        filteredIndexes = [];
        renderQuestions();
        updatePageIndicators();
        prevPageBtn.style.display = "";
        nextPageBtn.style.display = "";
    });
}

/* -------------------------
   Export to PDF
--------------------------*/
exportPdfBtn.addEventListener("click", async () => {
    const res = calculateScore();
    const exportEl = document.createElement("div");
    exportEl.style.padding = "20px";
    exportEl.style.background = "#fff";
    exportEl.innerHTML = `<h3>Quiz Results</h3><p>Score: ${res.score} / ${res.total}</p><hr>`;

    currentQuestions.forEach((q, i) => {
        const chosen = quizAnswers[`q${i}`] !== undefined ? q.options[quizAnswers[`q${i}`]] : "---";
        const correct = q.options[q.a];
        exportEl.innerHTML += `<p><strong>Q${i+1}.</strong> ${q.q}<br>Selected: ${chosen}<br>Correct: ${correct}</p>`;
    });

    document.body.appendChild(exportEl);
    const canvas = await html2canvas(exportEl, { scale: 1.5 });
    const imgData = canvas.toDataURL("image/png");
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth - 40;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 20, 20, imgWidth, imgHeight);
    pdf.save("quiz-results.pdf");
    document.body.removeChild(exportEl);
});

/* -------------------------
   DARK MODE persistence
--------------------------*/
darkModeToggle.addEventListener("change", () => {
    const theme = darkModeToggle.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("quiz_theme", theme);
});
(function(){
    const t = localStorage.getItem("quiz_theme") || "light";
    document.documentElement.setAttribute("data-bs-theme", t);
    darkModeToggle.checked = t === "dark";
})();

/* -------------------------
   Initial state
--------------------------*/
totalPages = 1;
updatePageIndicators();
updateProgressUI();
