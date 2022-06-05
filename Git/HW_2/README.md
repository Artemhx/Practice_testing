#### Git commands HW_2
***
_1. На локальном репозитории сделать ветки для:_
- _Postman_
- _Jmeter_
- _CheckLists_
- _Bag Reports_
- _SQL_
- _Charles_
- _Mobile testing_
```
git branch Postman
git branch Jmeter
git branch CheckLists
git branch Bug_Reports
git branch SQL
git branch Charles
git branch Mobile_testing
```
_2. Запушить все ветки на внешний репозиторий_
```
git push --all
```
_3. В ветке Bag Reports сделать текстовый документ со структурой баг репорта_
```
git checkout Bug_reports
touch Bug_report_structure.txt
vim Bug_report_structure.txt
```
 Id | Title | Description | Environment | Steps to reproduce | Expected result | Actual result | Severity | Priority | Attachments
:---|:------|:------------|:------------|:-------------------|:----------------|:--------------|:---------|:---------| :--------                            


_4. Запушить структуру багрепорта на внешний репозиторий_
```
git add .
git commit -m "add Bug_report_structure.txt"
git push
```
_5. Вмержить ветку Bag Reports в Main_
```
git checkout Main
git merge Bug_reports
```
_6. Запушить main на внешний репозиторий._
```
git push
```
_7. В ветке CheckLists набросать структуру чек листа._
```
git checkout CheckLists
touch CheckList_structure.txt
vim CheckList_structure.txt
```
 Id | Title | Input data | Expected result | Status | Details
:---|:------|:-----------|:----------------|:-------|--------



_8. Запушить структуру на внешний репозиторий_
```
git add .
git commit -m "add CheckList_structure.txt"
git push
```
_9. На внешнем репозитории сделать Pull Request ветки CheckLists в main_
```
На Веб-интерфейсе:
	Compare & Pull request -> Create pull request
	->Merge pull request -> Congfirm Merge
```

_10. Синхронизировать Внешнюю и Локальную ветки Main_
```
git checkout main
git pull
```