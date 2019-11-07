import React from 'react';
import InputSearch from './InputSearch';
import renderer from 'react-test-renderer';
import CloseIcon from '@/assets/icons/close_black.svg?react';

describe('InputSearch', () => {
	it('Match to snapshot when it has no params', () => {
    const component = renderer.create(
      <InputSearch />,
		);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
	});

	it('Match to snapshot when we pass a value param', () => {
		const value = '21 BUTTONS';

		const component = renderer.create(
			<InputSearch value={value} />,
		);

		let tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('Match to snapshot when we pass a placeholder param', () => {
		const placeholder = '21 BUTTONS';
		const component = renderer.create(
			<InputSearch placeholder={placeholder} />,
		);

		let tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('Match to snapshot when is focused', () => {
		const component = renderer.create(
			<InputSearch autoFocus={true} />,
		);

		let tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('Match to snapshot when close button is hidden', () => {
		const component = renderer.create(
			<InputSearch isCleanable={false} />,
		);

		let tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('Match to snapshot when close button is show', () => {
		const component = renderer.create(
			<InputSearch isCleanable={true} />,
		);

		let tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('Trigger on change when user writes something', () => {
		const value = "21 BUTTONS";
		const onChange = jest.fn();

		const component = renderer.create(
			<InputSearch value={value} onChange={onChange} />,
		);

		const input = component.root.findByType('input');

		input.props.onChange();

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith();
	});

	it('Clean input when user clicks clean button', () => {
		const onClick = jest.fn();

		const component = renderer.create(
			<InputSearch isCleanable={true} onClose={onClick} />,
		);

		const div = component.root.findByType(CloseIcon);
		div.props.onClick();

		expect(onClick).toHaveBeenCalledTimes(1);
		expect(onClick).toHaveBeenCalledWith();
	});
});
