export const TodoFilter = ({ setIsChecked, isChecked }) => {
	return (
		<section>
			<div className="filter-section">
				<button onClick={() => setIsChecked((prevState) => !prevState)}>
					{isChecked ? 'Show All' : 'Show Checked'}
				</button>
			</div>
		</section>
	);
};
