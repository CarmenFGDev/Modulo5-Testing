import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
describe('./pods/project/project.mappers', () => {
  it('should return empty project when feeding null value', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });
   it('should return empty project when feeding undefined value', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });
   it('should return expected result but feeding null employees list', () => {
    //Arrange
    const project: apiModel.Project ={
        id: '1',
        name: 'name1',
        externalId: 'externalId1',
        comments: 'comments1',
        isActive: true,
        employees: null
    }
     const projectResult: viewModel.Project ={
        id: '1',
        name: 'name1',
        externalId: 'externalId1',
        comments: 'comments1',
        isActive: true,
        employees: []
    }
     // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(projectResult);
   });
    it('should return expected result but feeding undefined employees list', () => {
    //Arrange
    const project: apiModel.Project ={
        id: '1',
        name: 'name1',
        externalId: 'externalId1',
        comments: 'comments1',
        isActive: true,
        employees: undefined
    }
     const projectResult: viewModel.Project ={
        id: '1',
        name: 'name1',
        externalId: 'externalId1',
        comments: 'comments1',
        isActive: true,
        employees: []
    }
     // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(projectResult);
   });
   it('should return expected result feeding correct values', () => {
    //Arrange
     const project: apiModel.Project ={
        id: '1',
        name: 'name1',
        externalId: 'externalId1',
        comments: 'comments1',
        isActive: true,
        employees:[
          {
            id: 'idEmployee1',
            isAssigned: true,
            employeeName: 'employeeName1'
          },
           {
            id: 'idEmployee2',
            isAssigned: false,
            employeeName: 'employeeName2'
          }
         ]
    }
     const projectResult: viewModel.Project ={
        id: '1',
        name: 'name1',
        externalId: 'externalId1',
        comments: 'comments1',
        isActive: true,
         employees:[
          {
            id: 'idEmployee1',
            isAssigned: true,
            employeeName: 'employeeName1'
          },
           {
            id: 'idEmployee2',
            isAssigned: false,
            employeeName: 'employeeName2'
          }
         ]
    }
       // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(projectResult);
  });

}); 