import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { usernameValidator } from '../validators/async.validator';

@Component({
  selector: 'app-fiveth-component',
  templateUrl: './fiveth-component.component.html',
  styleUrls: ['./fiveth-component.component.scss']
})
export class FivethComponentComponent {

  schoolForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.schoolForm = this.createItem('init');
    const updateData = {
      schoolName: 'school name',
      totalStudentsCount: 2000,
      classRooms: [
        {
          studentCount: 30,
          classRoomNumber: 1,
          subjects: [
            {
              subjectName: 'Math',
              studentsCount: 23
            }
          ]
        },
        {
          studentCount: 56,
          classRoomNumber: 1,
          subjects: [
            {
              subjectName: 'Math2',
              studentsCount: 15
            },
            {
              subjectName: 'subject 1',
              studentsCount: 65
            }
          ]
        }
      ]
    };
    setTimeout(() => {
      for (let i = 0; i < updateData.classRooms.length; i++) {
        this.addClassRoom();
        for (const sub of updateData.classRooms[i].subjects) {
          this.addClassRoomSubject(i);
        }
      }
      this.schoolForm.patchValue(updateData);
    }, 2000);
  }
  getClassRooms(): FormArray {
    return this.schoolForm.get('classRooms') as FormArray
  }

  addClassRoom() {
    this.getClassRooms().push(this.createItem('classRoom'));
  }

  deleteClassRoom(classRoomIndex: number) {
    this.getClassRooms().removeAt(classRoomIndex);
  }

  getClassRoomSubject(classRoomIndex: number): FormArray {
    return this.getClassRooms().at(classRoomIndex).get('subjects') as FormArray;
  }
  addClassRoomSubject(classRoomIndex: number) {
    this.getClassRoomSubject(classRoomIndex).push(this.createItem('subject'));
  }

  deleteSubject(subjectIndex: number, classRoomIndex: number) {
    this.getClassRoomSubject(classRoomIndex).removeAt(subjectIndex);

  }

  createItem(itemType: string): FormGroup {
    let formItem = this.fb.group({})
    switch (itemType) {
      case 'init':
        formItem = this.fb.group({
          schoolName: '',
          totalStudentsCount: '',
          classRooms: this.fb.array([])
        });
        break;
      case 'classRoom':
        formItem = this.fb.group({
          studentCount: '',
          classRoomNumber: '',
          subjects: this.fb.array([])
        });
        break;
      case 'subject':
        formItem = this.fb.group({
          subjectName: '',
          studentsCount: ''
        });
        break;
    }
    return formItem;
  }


}
