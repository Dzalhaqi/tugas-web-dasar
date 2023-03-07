const day = document.querySelector(".day").value
const tBody = document.querySelector("tbody")
const selectElement = document.querySelector("select")

const trObject = {
  tr: '',
  makeTr: function (data) {
    this.tr = '';
    for (subject of data) {
      let trData =
        `<tr>
          <th scope="col"
            class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
            <p class="course-subject">${subject['courseSubject']}</p>
          </th>

          <th scope="col"
            class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
            <p class"course-room">${subject['courseRoom']}</p>
          </th>

          <th scope="col"
            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
            <p class="course-time">${subject['courseTime']}</p>
          </th>
        </tr>`

      this.tr += trData;
    }
  },
  removeTr: function () {
    tBody.innerHTML = ''
  },
  addTr: function (tbody) {
    this.removeTr();
    tBody.innerHTML = this.tr;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  tableData = [
    {
      "courseSubject": "Machine Learning Ops",
      "courseRoom": "HH-203",
      "courseTime": "10:30 - 12:10"
    },
    {
      "courseSubject": "Praktikum Machine Learning Ops",
      "courseRoom": "C-206",
      "courseTime": "10:30 - 13:50",
    }
  ]

  trObject.makeTr(tableData);
  trObject.addTr(tBody);
})

if (selectElement) {
  selectElement.addEventListener("change", (event) => {
    const day = event.target.value
    switch (day) {
      case 'Monday':
        tableData = [
          {
            "courseSubject": "Machine Learning Ops",
            "courseRoom": "HH-203",
            "courseTime": "10:30 - 12:10"
          },
          {
            "courseSubject": "Praktikum Machine Learning Ops",
            "courseRoom": "C-206",
            "courseTime": "10:30 - 13:50",
          }
        ]
        break;
      case 'Tuesday':
        tableData = [
          {
            "courseSubject": "Data Warehouse",
            "courseRoom": "HH-202",
            "courseTime": "08:50 - 10:30"
          },
          {
            "courseSubject": "Praktikum Teknologi Web Service",
            "courseRoom": "C-303",
            "courseTime": "17:10 - 19:40",
          }
        ];
        break;
      case 'Wednesday':
        tableData = [
          {
            "courseSubject": "Praktikum Infrastruktur dan Manajemen Big Data",
            "courseRoom": "PS-05.08",
            "courseTime": "09:40 - 12:10"
          },
          {
            "courseSubject": "Teknologi Web Service",
            "courseRoom": "HH-104",
            "courseTime": "14:40 - 16:20"
          }
        ]
        break
      case 'Thursday':
        tableData = [
          {
            "courseSubject": "Praktikum Data Warehouse",
            "courseRoom": "C-105",
            "courseTime": "08:00 - 10:30"
          },
          {
            "courseSubject": "Data Mining",
            "courseRoom": "PS-07.03",
            "courseTime": "11:20 - 13:50"
          },
          {
            "courseSubject": "Infrastruktur dan Manajemen Big Data",
            "courseRoom": "B 202",
            "courseTime": "13:50 - 15:30"
          }
        ]
        break
      case 'Friday':
        tableData = [
          {
            "courseSubject": "Praktikum Data Mining",
            "courseRoom": "C 102",
            "courseTime": "08:00 - 10:30"
          }
        ]
    }

    trObject.makeTr(tableData);
    trObject.addTr(tBody);
  })
}