# 엑셀 저장 모듈
from openpyxl import Workbook

# listdata = [[], [], []]


def write_excel_template(filename, sheetname, listdata):
    wb = Workbook()
    ws = wb.active

    ws.title = sheetname

    for row in listdata:
        ws.append(row)

    base_dir = "./crawl/file/"
    wb.save(base_dir + filename)
    wb.close()


if __name__ == "__main__":
    listdata = [["이름", "나이"], ["A", 25], ["B", 23]]
    write_excel_template("test.xlsx", "TestSheet", listdata)
